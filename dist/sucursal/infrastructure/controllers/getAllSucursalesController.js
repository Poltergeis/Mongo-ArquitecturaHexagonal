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
exports.GetAllSucursalesController = void 0;
class GetAllSucursalesController {
    constructor(getAllSucursalesUseCase) {
        this.getAllSucursalesUseCase = getAllSucursalesUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sucursales = yield this.getAllSucursalesUseCase.run();
                if (!sucursales) {
                    return res.status(404).send({
                        status: "error",
                        message: "didn't get any sucursal from database, check if there are sucursal existing in the database/check getAll sucursales controller"
                    });
                }
                return res.status(200).send({
                    status: "success",
                    data: sucursales,
                    message: "got all sucursales from database"
                });
            }
            catch (error) {
                return res.status(500).send({
                    status: "error",
                    error: "internal server error, check getAll sucursales controller"
                });
            }
        });
    }
}
exports.GetAllSucursalesController = GetAllSucursalesController;
