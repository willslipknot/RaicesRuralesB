import express from "express";
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js';
import actRoutes from './routes/rutas.routes.js';
import condRoutes from './routes/cond.routes.js';
import vehiculoRoutes from './routes/vehiculo.routes.js';
import ReservasRoutes from './routes/reserva.routes.js';
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express();

const allowedOrigins = [
    'https://raices-ashy.vercel.app',
    'http://localhost:5173',
    'https://raicesruralesf-4d6i.onrender.com'
  ];

  app.use(cors({
    origin: function(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  }));

app.use(express.json({ limit: '50mb' }));
app.use(morgan('dev'));
app.use(express.json()); 
app.use(cookieParser());
app.use(authRoutes);
app.use(actRoutes);
app.use(condRoutes);
app.use(vehiculoRoutes);
app.use(ReservasRoutes);


export default app;