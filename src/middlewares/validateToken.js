import jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config.js'

export const authRequire = (req, res, next) => {
    console.log('Validando Token')
    const token = req.headers.authorization;

    console.log(token)

    if (!token) return res.status(401).json({ message: "No tiene token, autorizacion denegada" });
    
    // Verificar si el encabezado Authorization comienza con "Bearer"
    if (!token.startsWith('Bearer ')) return res.status(401).json({ message: "Token no válido" });
    
    // Obtener solo el token eliminando "Bearer " del encabezado
    const tokenWithoutBearer = token.split(' ')[1];

    jwt.verify(tokenWithoutBearer, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Token inválido" });

        req.user = user;
        next();
    });
}