"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dulceSchema = new mongoose_1.default.Schema({
    tipoSabor: {
        type: mongoose_1.default.Schema.Types.String,
        required: true
    },
    sabor: {
        type: mongoose_1.default.Schema.Types.String,
        required: true
    },
    marca: {
        type: mongoose_1.default.Schema.Types.String,
        required: true
    },
    precio: {
        type: mongoose_1.default.Schema.Types.Number,
        required: true
    },
    stock: {
        type: mongoose_1.default.Schema.Types.Number,
        required: true
    },
    contenidoCalorico: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        validate: {
            validator: function (value) {
                value = value.trim();
                const cantidad = value.substring(0, value.indexOf(' ') - 1);
                const unidadDeMedida = value.substring(value.indexOf(' ') + 1, value.length);
                return (/^\d+$/.test(cantidad) && ["cal", "kcal"].includes(unidadDeMedida));
            },
            message: 'el sabor debe ser un numero en unidades cal o kcal y debe seguir el siguiente formato [numero][ ][unidad de medida]'
        }
    }
});
const DulceModel = mongoose_1.default.model('dulce', dulceSchema, 'dulces');
exports.default = DulceModel;
