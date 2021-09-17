import Router from 'express';
import {deleteNota, getNotaById, getNotas, nuevaNota, updateNota} from '../controllers/notasControllers';

const router = Router();

router.get('/',getNotas);
router.get('/:id',getNotaById);
router.post('/', nuevaNota);
router.put('/:id',updateNota);
router.delete('/:id', deleteNota);

export default router;