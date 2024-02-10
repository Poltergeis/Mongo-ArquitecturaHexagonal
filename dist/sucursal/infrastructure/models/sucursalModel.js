"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const empleadoSchema = new mongoose_1.default.Schema({
    nombre: {
        type: mongoose_1.default.Schema.Types.String,
        required: true
    },
    salario: {
        type: mongoose_1.default.Schema.Types.Number,
        required: true
    }
}, { _id: false, versionKey: false });
const sucursalSchema = new mongoose_1.default.Schema({
    nombre: {
        type: mongoose_1.default.Schema.Types.String,
        required: true
    },
    valorInmobiliario: {
        type: mongoose_1.default.Schema.Types.Number,
        required: true
    },
    promedioClientes: {
        type: mongoose_1.default.Schema.Types.Number,
        required: true
    },
    ciudad: {
        type: mongoose_1.default.Schema.Types.String,
        required: true
    },
    empleados: {
        type: [empleadoSchema],
        required: true,
    }
}, { versionKey: false });
const sucursalModel = mongoose_1.default.model('sucursal', sucursalSchema, 'sucursales');
exports.default = sucursalModel;
