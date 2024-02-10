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
exports.CreateDulceController = void 0;
class CreateDulceController {
    constructor(createDulceUseCase) {
        this.createDulceUseCase = createDulceUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                let dulce = yield this.createDulceUseCase.run(data.tipoSabor, data.sabor, data.marca, data.precio, data.stock, data.contenidoCalorico);
                if (dulce) {
                    return res.status(201).send({
                        status: "success",
                        data: {
                            tipoSabor: dulce.tipoSabor,
                            sabor: dulce.sabor,
                            marca: dulce.marca,
                            precio: dulce.precio,
                            stock: dulce.stock,
                            contenidoCalorico: dulce.contenidoCalorico
                        },
                        message: "dulce creado con exito"
                    });
                }
                else {
                    return res.status(400).send({
                        status: "error",
                        error: "dulce couldn't be got back from createDulceUseCase.ts"
                    });
                }
            }
            catch (error) {
                console.log('error during controller handling request', error);
                return res.status(500).send('error during request handling, check create dulce controller file');
            }
        });
    }
}
exports.CreateDulceController = CreateDulceController;
