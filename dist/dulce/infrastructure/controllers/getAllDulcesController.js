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
exports.GetAllDulcesController = void 0;
class GetAllDulcesController {
    constructor(getAllDulcesUseCase) {
        this.getAllDulcesUseCase = getAllDulcesUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dulces = yield this.getAllDulcesUseCase.run();
                if (dulces) {
                    return res.status(200).send({
                        status: "success",
                        data: dulces,
                        message: "successfully got all dulces from data base"
                    });
                }
                else {
                    return res.status(404).send({
                        status: "error",
                        error: "couldn't get any dulce from data base, check if your collection has any data saved, if not,\n" +
                            "check getAll dulces useCase or Controller files for logical error"
                    });
                }
            }
            catch (error) {
                return res.status(500).send({
                    status: "error",
                    error: `error handling getAll dulces request, check get all dulce controller or useCase files.\n${error}`
                });
            }
        });
    }
}
exports.GetAllDulcesController = GetAllDulcesController;
