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
exports.AddSucursalController = void 0;
class AddSucursalController {
    constructor(addSucursalUseCase) {
        this.addSucursalUseCase = addSucursalUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                if (!data) {
                    return res.status(404).send({
                        status: "error",
                        message: "didn't get any body from request"
                    });
                }
                const sucursal = yield this.addSucursalUseCase.run(data.nombre, data.valorInmobiliario, data.promedioClientes, data.ciudad, data.empleados);
                if (!sucursal) {
                    return res.status(400).send({
                        status: "error",
                        message: "couldn't create a new sucursal, check data requeriments"
                    });
                }
                return res.status(201).send({
                    status: "success",
                    data: sucursal,
                    message: "new sucursal has been successfully added"
                });
            }
            catch (error) {
                return res.status(500).send({
                    status: "error",
                    error: "internal server error, check add sucursal controller"
                });
            }
        });
    }
}
exports.AddSucursalController = AddSucursalController;
