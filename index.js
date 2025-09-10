import express from 'express';
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import supabase from './bd/bd.js'; // Import the Supabase client
import createError from 'http-errors';
import { engine } from 'express-handlebars';
import perfilesRouter from './routes/perfiles.js';
import exphbs from 'express-handlebars';

const app = express();
const PORT = process.env.PORT || 3000;
//hbs.registerHelper('eq', function(a, b) {
//  return a === b;
//});
//app.engine('handlebars', exphbs.engine({
//  helpers: {
//    eq: (a, b) => a === b
//  }

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
//app.set('view engine', 'handlebars');
app.set('views', './views');
app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'layout',
  layoutsDir: './views'
}));
//hbs.registerHelper('eq', (a, b) => a === b);
//const supabaseUrl = process.env.SUPABASE_URL;
//const supabaseKey = process.env.SUPABASE_KEY;
//const supabase = createClient(supabaseUrl, supabaseKey);
app.use(perfilesRouter);





//app.use((req, res, next) => {
//    if (!req.user) return next(
//        createError(401, 'Login Required!!'));
//    next();
//});
//app.get('/perfiles', async (req, res) => {
//  try {
//    // Consulta a la tabla perfiles usando Supabase
//    const { data, error } = await supabase
//      .from('perfiles')
//      .select('name, email');
//    if (error) throw error;
//    res.json(data);
//  } catch (error) {
//    console.error(error);
//    res.status(500).json({ error: 'Error al consultar perfiles' });
//  }
//});

//app.get('/', (req, res) => {
//  res.send('¡Hola, mundo!');
//});


app.listen(PORT, () => {
  console.log("Servidor escuchando");
});