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
exports.DelsucursalController = void 0;
class DelsucursalController {
    constructor(delSucursalUseCase) {
        this.delSucursalUseCase = delSucursalUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nombre } = req.params;
                const sucursal = this.delSucursalUseCase.run(nombre);
                if (!sucursal) {
                    return res.status(404).send({
                        status: "error",
                        message: "sucursal not found"
                    });
                }
                return res.status(200).send({
                    status: "success",
                    data: sucursal,
                    message: "found deletable sucursal, deleted"
                });
            }
            catch (error) {
                return res.status(500).send({
                    status: "error",
                    error: "internal server error, check delsucursal controller"
                });
            }
        });
    }
}
exports.DelsucursalController = DelsucursalController;
