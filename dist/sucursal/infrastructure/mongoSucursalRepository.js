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
exports.PgsqSucursalRepository = void 0;
const sucursal_1 = require("../domain/sucursal");
const sucursalModel_1 = __importDefault(require("./models/sucursalModel"));
class PgsqSucursalRepository {
    addSucursal(nombre, valorInmobiliario, promedioClientes, ciudad, empleados) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newSucursal = new sucursal_1.Sucursal(nombre, valorInmobiliario, promedioClientes, ciudad, empleados);
                const dbNewSucursal = yield sucursalModel_1.default.create({
                    nombre: newSucursal.nombre,
                    valorInmobiliario: newSucursal.valorInmobiliario,
                    promedioClientes: newSucursal.promedioClientes,
                    ciudad: newSucursal.ciudad,
                    empleados: newSucursal.empleados
                });
                yield dbNewSucursal.save();
                return newSucursal;
            }
            catch (error) {
                console.log('error while creating new Sucursal', error);
                return null;
            }
        });
    }
    getAllSucursal() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sucursales = yield sucursalModel_1.default.find();
                if (!sucursales) {
                    return [];
                }
                return sucursales;
            }
            catch (error) {
                return [];
            }
        });
    }
    delSucursal(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield sucursalModel_1.default.findOneAndDelete({ nombre: nombre });
                return null;
            }
            catch (error) {
                return null;
            }
        });
    }
    clearSucursales() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield sucursalModel_1.default.deleteMany();
                return null;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.PgsqSucursalRepository = PgsqSucursalRepository;
