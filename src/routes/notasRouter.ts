import Router from 'express';
import {deleteNota, getNotaById, getNotas, nuevaNota, updateNota} from '../controllers/notasController';

const router = Router();

router.get('/notas',getNotas);
router.get('/notas/:id',getNotaById);
router.post('/notas', nuevaNota);
router.put('/notas/:id',updateNota);
router.delete('/notas/:id', deleteNota);

export default router;