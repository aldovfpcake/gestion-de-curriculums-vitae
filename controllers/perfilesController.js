import supabase from '../bd/bd.js';

export const obtenerPerfiles = async (req, res) => {
  const { data, error } = await supabase
    .from('perfiles')
    .select('name, email,id');

  if (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al consultar perfiles' });
  }

  res.render('perfiles', { perfiles: data });
};

export const obtenerPerfilPorId = async (req, res) => {
  const { id } = req.body || req.params;
 if (isNaN(id)) {
      return res.status(400).send('ID inválido qqqqqq');
   }
   console.log(id);


  const { data, error } = await supabase
    .from('perfiles')
    .select('id,name, email,documento,fnac,especialidad')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    return res.status(404).json({ error: 'Perfil no encontrado------- ' });
  }

  //res.json(data);
  console.log(data);
  res.render('editarPerfil', {data });
};

export const crearPerfil = async (req, res) => {
 
const { documento, name, fnac, especialidad,email } = req.body || {};
  console.log('Datos recibidos:', req.body); // Depuración: Verifica los datos recibidos  
  if (!documento || !name || !fnac || !especialidad || !email) { 
        return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  //const { name, email,documento,fnac,especialidad } = req.body;
  const { data, error } = await supabase
    .from('perfiles')
    .insert([{ name, email, documento, fnac, especialidad }]);

  if (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al crear perfil' });
  }

  res.status(201).json(data);
};

export const mostrarFormularioCrear = (req, res) => {
  res.render('InsertarPerfil', {
    title: 'Crear Perfil'
  });
};

export const eliminarPerfil = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase
    .from('perfiles')
    .delete()
    .eq('id', id);

  if (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al eliminar perfil' });
  }

  res.status(204).send();
};

export const actualizarPerfil = async (req, res) => {
  const { id } = req.body || req.params;
  const { name, email,fnac,documento,especialidad } = req.body;
  if (isNaN(id)) {
      return res.status(400).send('ID inválido');
   }
   console.log(id);
  try {
    const { error } = await supabase
      .from('perfiles')
      .update({ name, email,fnac, documento, especialidad })
      .eq('id', id);

    if (error) throw error;

    res.redirect('/');
  } catch (err) {
    console.error('Error al actualizar perfil:', err.message);
    res.status(500).send('Error al actualizar el perfil');
  }
};

export const mostrarFormularioEdicion = (req, res) => {
  const perfil = perfiles.find(p => p.id === req.params.id);
  if (!perfil) return res.status(404).send('Perfil no encontrado xxxx');
  
};
