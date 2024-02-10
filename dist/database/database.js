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
exports.endDatabase = exports.runDatabase = exports.dbConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const signale_1 = require("signale");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const signale = new signale_1.Signale();
function dbConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(`mongodb://127.0.0.1:27017/dulces`);
            console.log('Database connected successfully');
        }
        catch (error) {
            signale.error(`Error: ${error}`);
            process.exit(1);
        }
    });
}
exports.dbConnection = dbConnection;
;
function runDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(process.env.DB_HOST);
            yield dbConnection();
            console.log('connected to Database, mongo is listening');
        }
        catch (error) {
            signale.error("couldn't connect to DB", error);
            process.exit(1);
        }
    });
}
exports.runDatabase = runDatabase;
function endDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connection.close();
            console.log('Database connection closed successfully');
        }
        catch (error) {
            signale.error(`Error: ${error}`);
        }
    });
}
exports.endDatabase = endDatabase;
