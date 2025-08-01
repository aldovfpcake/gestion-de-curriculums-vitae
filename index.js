import express from 'express';
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import supabase from './bd/bd.js'; // Import the Supabase client
import createError from 'http-errors';

const app = express();
const PORT = process.env.PORT || 3000;
//const supabaseUrl = process.env.SUPABASE_URL;
//const supabaseKey = process.env.SUPABASE_KEY;
//const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.json());
//app.use((req, res, next) => {
//    if (!req.user) return next(
//        createError(401, 'Login Required!!'));
//    next();
//});
app.get('/perfiles', async (req, res) => {
  try {
    // Consulta a la tabla perfiles usando Supabase
    const { data, error } = await supabase
      .from('perfiles')
      .select('name, email');
    if (error) throw error;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al consultar perfiles' });
  }
});

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(PORT, () => {
  console.log("Servidor escuchando");
});