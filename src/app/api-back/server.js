const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const { Pool } = require('pg');
const bcrypt = require('bcrypt'); // Importar bcrypt

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
  const { usuario, apodo, contrasena, rol } = req.body;

  try {
    if (!usuario || !apodo || !contrasena || !rol) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const userWithRoleExists = await pool.query(
      'SELECT * FROM usuarios WHERE usuario = $1 AND rol = $2',
      [usuario, rol]
    );

    if (userWithRoleExists.rows.length > 0) {
      return res.status(409).json({ error: 'El usuario con este rol ya está registrado' });
    }

    // Encriptar la contraseña antes de guardarla
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

    const result = await pool.query(
      'INSERT INTO usuarios (usuario, apodo, contrasena, rol) VALUES ($1, $2, $3, $4) RETURNING *',
      [usuario, apodo, hashedPassword, rol]
    );
    res.status(201).json(result.rows[0]); 
  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
});

// Ruta para el inicio de sesión
app.post('/ingreso', async (req, res) => {
  const { usuario, contrasena } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM usuarios WHERE usuario = $1',
      [usuario]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];

      // Comparar la contraseña encriptada
      const validPassword = await bcrypt.compare(contrasena, user.contrasena);

      if (validPassword) {
        res.json({ success: true, message: 'Autenticación exitosa', rol: user.rol });
      } else {
        res.json({ success: false, message: 'Usuario o contraseña incorrectos' });
      }
    } else {
      res.json({ success: false, message: 'Usuario o contraseña incorrectos' });
    }
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

const PORT = 3000;
app.listen(PORT, 'localhost', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
