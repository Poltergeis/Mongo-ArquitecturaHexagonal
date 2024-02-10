import mongoose, { Schema } from "mongoose";

const empleadoSchema:Schema = new mongoose.Schema({
    nombre: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    salario: {
        type: mongoose.Schema.Types.Number,
        required: true
    }
}, { _id: false, versionKey:false });

const sucursalSchema:Schema = new mongoose.Schema({
    nombre: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    valorInmobiliario: {
        type: mongoose.Schema.Types.Number,
        required: true
    },
    promedioClientes: {
        type: mongoose.Schema.Types.Number,
        required: true
    },
    ciudad: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    empleados: {
        type: [empleadoSchema],
        required: true,
    }
}, { versionKey:false });

const sucursalModel = mongoose.model('sucursal', sucursalSchema, 'sucursales');

export default sucursalModel;