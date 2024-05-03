import { Router } from "express";
import { authRequire } from '../middlewares/validateToken.js';
import { getAct, getActs, createAct, putAct, deleteAct } from "../controllers/rutas.controller.js";
import { uploadMiddleware, handleUpload } from '../middlewares/storage.js';

const router = Router();

router.get('/actividades', authRequire, getActs);

router.get('/actividades/images', authRequire, getActs);

router.get('/actividad/:id', authRequire, getAct);

router.post('/actividades', authRequire, uploadMiddleware, handleUpload, createAct);

router.delete('/actividad/:id', authRequire, deleteAct);

router.put('/actividad/:id', authRequire, uploadMiddleware, handleUpload, putAct);

export default router;
