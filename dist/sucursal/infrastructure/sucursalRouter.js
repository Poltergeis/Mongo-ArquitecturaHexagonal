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
exports.sucursalRouter = void 0;
const express_1 = require("express");
const dependencies_1 = require("./dependencies");
exports.sucursalRouter = (0, express_1.Router)();
exports.sucursalRouter.post('/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dependencies_1.addSucursalController.run(req, res);
    }
    catch (error) {
        return null;
    }
}));
exports.sucursalRouter.get('/getAll', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dependencies_1.getAllSucursalesController.run(req, res);
    }
    catch (error) {
        return null;
    }
}));
exports.sucursalRouter.delete('/clear', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dependencies_1.clearSucursalesController.run(req, res);
    }
    catch (error) {
        return null;
    }
}));
exports.sucursalRouter.delete('/delOne/:nombre', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dependencies_1.delSucursalController.run(req, res);
    }
    catch (error) {
        return null;
    }
}));
