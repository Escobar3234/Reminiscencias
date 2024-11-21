const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'uploads'),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});
const upload = multer({ storage });

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'reminiscencias',
  password: '12345678',
  port: 5432,
});

// Ruta para registrar usuario
app.post('/register', async (req, res) => {
  const { correoElectronico, apodo, contrasena, rol } = req.body;

  try {
    if (!correoElectronico || !apodo || !contrasena || !rol) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const userWithRoleExists = await pool.query(
      'SELECT * FROM usuarios WHERE correo_electronico = $1 AND rol = $2',
      [correoElectronico, rol]
    );

    if (userWithRoleExists.rows.length > 0) {
      return res.status(409).json({ error: 'El usuario con este rol ya está registrado' });
    }

    // Encriptar la contraseña antes de guardarla
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

    const result = await pool.query(
      'INSERT INTO usuarios (correo_electronico, apodo, contrasena, rol) VALUES ($1, $2, $3, $4) RETURNING *',
      [correoElectronico, apodo, hashedPassword, rol]
    );
    res.status(201).json(result.rows[0]); 
  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
});

// Ruta para el inicio de sesión
app.post('/ingreso', async (req, res) => {
  const { correoElectronico, contrasena } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM usuarios WHERE correo_electronico = $1',
      [correoElectronico]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];

      // Comparar la contraseña encriptada
      const validPassword = await bcrypt.compare(contrasena, user.contrasena);

      if (validPassword) {
        // Obtener las mesas del usuario
        const mesasResult = await pool.query(
          `SELECT mesas.*
           FROM mesas
           JOIN jugadores_mesas ON mesas.id_mesas = jugadores_mesas.mesas_id_mesas
           WHERE jugadores_mesas.usuarios_id_usuario = $1`,
          [user.id_usuario]
        );

        res.json({ success: true, mesas: mesasResult.rows, rol: user.rol });
      } else {
        res.json({ success: false, message: 'Correo electrónico o contraseña incorrectos' });
      }
    } else {
      res.json({ success: false, message: 'Correo electrónico o contraseña incorrectos' });
    }
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

// Ruta para crear una nueva mesa
app.post('/crear-mesa', async (req, res) => {
  const { nombreMesa, cantidadJugadores } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO mesas (nombre_mesa, capacidad) VALUES ($1, $2) RETURNING *',
      [nombreMesa, cantidadJugadores]
    );
    res.status(201).json(result.rows[0]); 
  } catch (error) {
    console.error('Error al crear la mesa:', error);
    res.status(500).json({ error: 'Error al crear la mesa' });
  }
});

// Ruta para obtener todas las mesas
app.get('/mesas', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM mesas');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener las mesas:', error);
    res.status(500).json({ error: 'Error al obtener las mesas' });
  }
});

// Ruta para unirse a una mesa
app.post('/unirse-mesa', async (req, res) => {
  const { idMesa, idUsuario } = req.body;

  try {
    // Verificar si el usuario ya está unido a la mesa
    const checkExisting = await pool.query(
      'SELECT * FROM jugadores_mesas WHERE usuarios_id_usuario = $1 AND mesas_id_mesas = $2',
      [idUsuario, idMesa]
    );

    if (checkExisting.rows.length > 0) {
      return res.status(409).json({ error: 'El usuario ya está unido a esta mesa' });
    }

    // Insertar el nuevo registro con un valor predeterminado para nombre_personaje
    const result = await pool.query(
      'INSERT INTO jugadores_mesas (usuarios_id_usuario, mesas_id_mesas, nombre_personaje) VALUES ($1, $2, $3) RETURNING *',
      [idUsuario, idMesa, 'Sin Nombre']
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al unirse a la mesa:', error);
    res.status(500).json({ error: 'Error al unirse a la mesa' });
  }
});

// Ruta para guardar información del personaje
app.post('/guardar-personaje', upload.single('imagen'), async (req, res) => {
  const { nombrePersonaje, edad, altura, idMesa, idUsuario } = req.body;

  console.log('Datos recibidos del cliente:', { nombrePersonaje, edad, altura, idMesa, idUsuario });
  
  try {
    const imagen = req.file ? req.file.filename : null; // Manejar la imagen si está presente
    console.log('Nombre del archivo de imagen:', imagen);

    const result = await pool.query(
      'UPDATE jugadores_mesas SET nombre_personaje = $1, edad = $2, altura = $3, img_perfil = $4 WHERE usuarios_id_usuario = $5 AND mesas_id_mesas = $6 RETURNING *',
      [nombrePersonaje, edad, altura, imagen, idUsuario, idMesa]
    );
    
    console.log('Resultado de la consulta:', result.rows[0]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error al guardar el personaje:', error);
    res.status(500).json({ error: 'Error al guardar el personaje' });
  }
});

// Ruta para obtener los detalles del usuario
app.get('/usuario/:idUsuario', async (req, res) => {
  const { idUsuario } = req.params;

  try {
    const result = await pool.query(
      'SELECT apodo FROM usuarios WHERE id_usuario = $1',
      [idUsuario]
    );
    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener los detalles del usuario:', error);
    res.status(500).json({ error: 'Error al obtener los detalles del usuario' });
  }
});

// Ruta para obtener las mesas de un usuario
app.get('/mesas-usuario/:idUsuario', async (req, res) => {
  const { idUsuario } = req.params;

  try {
    const result = await pool.query(
      `SELECT mesas.*
       FROM mesas
       JOIN jugadores_mesas ON mesas.id_mesas = jugadores_mesas.mesas_id_mesas
       WHERE jugadores_mesas.usuarios_id_usuario = $1`,
      [idUsuario]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener las mesas del usuario:', error);
    res.status(500).json({ error: 'Error al obtener las mesas del usuario' });
  }
});

// Ruta para obtener los jugadores de una mesa
app.get('/jugadores-mesa/:idMesa', async (req, res) => {
  const { idMesa } = req.params;

  try {
    const result = await pool.query(
      `SELECT usuarios.apodo, usuarios.correo_electronico
       FROM jugadores_mesas
       JOIN usuarios ON jugadores_mesas.usuarios_id_usuario = usuarios.id_usuario
       WHERE jugadores_mesas.mesas_id_mesas = $1`,
      [idMesa]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener las mesas del usuario:', error);
    res.status(500).json({ error: 'Error al obtener las mesas del usuario' });
  }
});

const PORT = 3000;
app.listen(PORT, 'localhost', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
