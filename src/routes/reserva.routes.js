import { Router } from "express";
import { authRequire } from '../middlewares/validateToken.js'
import { getReservas, getReserva} from "../controllers/reserva.controller.js";

const router = Router()

router.get('/reservas',authRequire, getReservas);

router.get('/reserva/:id',authRequire, getReserva);


export default router