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
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const signale_1 = require("signale");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./database/database");
const signale = new signale_1.Signale();
dotenv_1.default.config();
const corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:3001"]
};
const dulceRouter_1 = require("./dulce/infrastructure/dulceRouter");
const sucursalRouter_1 = require("./sucursal/infrastructure/sucursalRouter");
const app = (0, express_1.default)();
app.use((0, cors_1.default)(corsOptions));
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use('/dulce', dulceRouter_1.dulceRouter);
app.use('/sucursal', sucursalRouter_1.sucursalRouter);
const iniciarServidor = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        app.listen(process.env.PORT, () => {
            signale.success('Api Running on port ' + process.env.PORT);
        });
        yield (0, database_1.runDatabase)();
    }
    catch (error) {
        signale.error("couldn't run the api, check app.ts", error);
    }
});
iniciarServidor();
