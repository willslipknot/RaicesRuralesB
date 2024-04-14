import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Vehiculo = sequelize.define('Vehiculo', {
    placa: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        trim: true,
    },
    marca: {
        type: DataTypes.STRING,
        trim: true,
    },
    linea: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        trim: true,
    },
    cilindrada: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        trim: true,
    },
    clase: {
        type: DataTypes.STRING,
        trim: true,
    },
    carroceria: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    combustible: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    propietario: {
        type: DataTypes.STRING,
        trim: true,
    },
    identificacion: {
        type: DataTypes.STRING,
        trim: true,
    },
    num_ident: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        trim: true,
    },
    imagenes: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    }
},
    {
        schema: 'usuarios',
        tableName: 'vehiculos',
        timestamps: false,
    });

    export default Vehiculo;