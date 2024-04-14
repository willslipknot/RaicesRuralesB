import { Router } from "express";
import { authRequire } from '../middlewares/validateToken.js'
import { getVehiculo, getVehiculos, putVehiculo, deleteVehiculo, createVehiculo, getVeh } from "../controllers/vehiculos.controller.js";
import { storage } from '../middlewares/storage.js'
import multer from "multer";

const upload = multer({storage}).single('imagenes');
const router = Router()

router.get('/vehiculos',authRequire, getVehiculos);

router.get('/vehiculo/:id',authRequire, getVehiculo);

router.post('/vehiculos',authRequire, upload, createVehiculo);

router.delete('/vehiculo/:id', authRequire, deleteVehiculo);

router.put('/vehiculo/:id', authRequire, putVehiculo);

router.get('/vehiculos/:clase', authRequire, getVeh);



export default router