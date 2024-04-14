import { Router } from "express";
import { authRequire } from '../middlewares/validateToken.js'
import { getCond, getConds, putCond, deleteCond, createCond } from "../controllers/cond.controller.js";
import { storage } from '../middlewares/storage.js'
import multer from "multer";

const upload = multer({storage}).single('foto');

const router = Router()

router.get('/conductores',authRequire, getConds);

router.get('/conductor/:id',authRequire, getCond);

router.post('/conductores',authRequire, upload,  createCond);

router.delete('/conductor/:id', authRequire, deleteCond);

router.put('/conductor/:id', authRequire, putCond);

router.get('/conductores/images',authRequire, getConds);




export default router