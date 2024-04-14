import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Reserva = sequelize.define('Reserva', {
    nom_act: {
        type: DataTypes.STRING,
        trim: true,
    },
    conductor: {
        type: DataTypes.STRING,
        trim: true,
    },
    vehiculo: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    fecha: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    hora: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cliente: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        schema: 'actividades',
        tableName: 'reservas',
        timestamps: false,
    });



export default Reserva;

