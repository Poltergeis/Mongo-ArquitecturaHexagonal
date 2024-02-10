import mongoose, { Schema } from "mongoose";

const dulceSchema:Schema = new mongoose.Schema({
    tipoSabor: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    sabor: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    marca: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    precio: {
        type: mongoose.Schema.Types.Number,
        required: true
    },
    stock: {
        type: mongoose.Schema.Types.Number,
        required: true
    },
    contenidoCalorico: {
        type: mongoose.Schema.Types.String,
        required: true,
        validate:{
            validator: function(value:string) {
                value = value.trim();
                const cantidad:string = value.substring(0,value.indexOf(' ') - 1);
                const unidadDeMedida:string = value.substring(value.indexOf(' ') + 1,value.length);
                return (/^\d+$/.test(cantidad) && ["cal","kcal"].includes(unidadDeMedida));
            },
            message: 'el sabor debe ser un numero en unidades cal o kcal y debe seguir el siguiente formato [numero][ ][unidad de medida]'
        }
    }
});

const DulceModel = mongoose.model('dulce', dulceSchema, 'dulces');

export default DulceModel;