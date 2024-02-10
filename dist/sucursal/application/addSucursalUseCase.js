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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSucursalUseCase = void 0;
class AddSucursalUseCase {
    constructor(sucursalRepository) {
        this.sucursalRepository = sucursalRepository;
    }
    run(nombre, valorInmobiliario, promedioClientes, ciudad, empleados) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sucursal = yield this.sucursalRepository.addSucursal(nombre, valorInmobiliario, promedioClientes, ciudad, empleados);
                return sucursal;
            }
            catch (error) {
                console.log('error en addSucursal use case', error);
                return null;
            }
        });
    }
}
exports.AddSucursalUseCase = AddSucursalUseCase;
