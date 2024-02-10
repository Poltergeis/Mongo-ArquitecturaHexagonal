"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgsqDulceRepository = void 0;
const dulce_1 = require("../domain/dulce");
const dulceModel_1 = __importDefault(require("./models/dulceModel"));
class PgsqDulceRepository {
    createDulce(tipoSabor, sabor, marca, precio, stock, contenidoCalorico) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nuevoDulce = new dulce_1.Dulce(tipoSabor, sabor, marca, precio, stock, contenidoCalorico);
                const mongoNuevoDulce = yield dulceModel_1.default.create({
                    tipoSabor: nuevoDulce.tipoSabor,
                    sabor: nuevoDulce.sabor,
                    marca: nuevoDulce.marca,
                    precio: nuevoDulce.precio,
                    stock: nuevoDulce.stock,
                    contenidoCalorico: nuevoDulce.contenidoCalorico
                });
                yield mongoNuevoDulce.save();
                return nuevoDulce;
            }
            catch (error) {
                console.log('error creating document Dulce, check mongoDulceRepository.ts file', error);
                return null;
            }
        });
    }
    getAllDulces() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dulces = yield dulceModel_1.default.find();
                return dulces;
            }
            catch (error) {
                console.log('system error handling getAll dulces function, check mongoDulceRepository.ts file', error);
                return [];
            }
        });
    }
}
exports.PgsqDulceRepository = PgsqDulceRepository;
