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

// Ruta para crear una nueva mesa (sin verificar el rol de Master)
app.post('/crear-mesa', async (req, res) => {
  const { nombreMesa, cantidadJugadores } = req.body;  // Solo recibimos nombre y cantidad de jugadores

  try {
    // Verificar que se recibieron los datos necesarios
    if (!nombreMesa || !cantidadJugadores) {
      return res.status(400).json({ error: 'El nombre de la mesa y la cantidad de jugadores son obligatorios' });
    }

    // Insertar la nueva mesa sin verificar el rol del idMaster
    const result = await pool.query(
      'INSERT INTO mesas (nombre_mesa, capacidad) VALUES ($1, $2) RETURNING *',
      [nombreMesa, cantidadJugadores]  // Solo se inserta nombre y capacidad
    );
    
    res.status(201).json(result.rows[0]);  // Devolver la mesa creada
  } catch (error) {
    console.error('Error al crear la mesa:', error);
    res.status(500).json({ error: 'Error al crear la mesa' });
  }
});

// Ruta para obtener las mesas de un master específico
app.get('/mesas/:idMaster', async (req, res) => {
  const { idMaster } = req.params;

  try {
    // Asegurarse de que idMaster está presente
    if (!idMaster) {
      return res.status(400).json({ error: 'El id del master es obligatorio' });
    }

    const result = await pool.query(
      'SELECT * FROM mesas WHERE id_master = $1',  // Filtramos las mesas por id_master
      [idMaster]
    );
    res.status(200).json(result.rows);  // Solo devolver las mesas que pertenecen al idMaster
  } catch (error) {
    console.error('Error al obtener las mesas del master:', error);
    res.status(500).json({ error: 'Error al obtener las mesas' });
  }
});

// Ruta para obtener todas las mesas (para administración, si es necesario)
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
app.post('/guardar-personaje', upload.single('img_perfil'), async (req, res) => {
  const { nombrePersonaje, edad, altura, idMesa, idUsuario } = req.body;

  console.log('Datos recibidos del cliente:', { nombrePersonaje, edad, altura, idMesa, idUsuario });
  
  try {
    const imagen = req.file ? req.file.filename : null; // Manejar la imagen si está presente
    console.log('Nombre del archivo de imagen:', imagen);

    const result = await pool.query(
      'UPDATE jugadores_mesas SET nombre_personaje = $1, edad = $2, altura = $3, imagen = $4 WHERE usuarios_id_usuario = $5 AND mesas_id_mesas = $6 RETURNING *',
      [nombrePersonaje, edad, altura, img_perfil, idUsuario, idMesa]
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error al guardar los datos del personaje:', error);
    res.status(500).json({ error: 'Error al guardar los datos del personaje' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
