import { Router } from 'express';
import {
  obtenerPerfiles,
  obtenerPerfilPorId,
  crearPerfil,
  eliminarPerfil,
  mostrarFormularioCrear,
  mostrarFormularioEdicion,
  actualizarPerfil,
  mostrarformulariocontacto,
  enviarFormularioContacto

} from '../controllers/perfilesController.js';

const router = Router();

router.get('/perfiles', obtenerPerfiles);
router.get('/perfiles/:id', obtenerPerfilPorId);
router.post('/perfiles', crearPerfil);
router.delete('/perfiles/:id', eliminarPerfil);
router.get('/insertar',mostrarFormularioCrear );
router.get('/editar/:id', obtenerPerfilPorId);
router.get('/contacto',mostrarformulariocontacto)

// Procesar edición
router.post('/actualizarPerfil/:id', actualizarPerfil);
router.post('/actualizarPerfil/', actualizarPerfil);


// Eliminar perfil
router.post('/eliminar/:id', eliminarPerfil);
//router.post('/enviarformulariocontacto', mostrarformulariocontacto);
router.post('/contacto', enviarFormularioContacto);

export default router;
