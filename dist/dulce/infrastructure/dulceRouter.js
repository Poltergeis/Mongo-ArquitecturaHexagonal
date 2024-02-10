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
exports.dulceRouter = void 0;
const dependencies_1 = require("./dependencies");
const dependencies_2 = require("./dependencies");
const express_1 = __importDefault(require("express"));
exports.dulceRouter = express_1.default.Router();
exports.dulceRouter.post('/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dependencies_1.createDulceController.run(req, res);
    }
    catch (error) {
        return null;
    }
}));
exports.dulceRouter.get('/getAll', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dependencies_2.getAllDulcesController.run(req, res);
    }
    catch (error) {
        return null;
    }
}));
