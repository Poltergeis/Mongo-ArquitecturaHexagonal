import express from "express";
import helmet from "helmet";
import { Signale } from "signale";
import cors from "cors";
import dotenv from "dotenv";

import { runDatabase } from "./database/database";

const signale = new Signale();

dotenv.config();

const corsOptions = {
    origin: ["http://localhost:3000","http://localhost:3001"]
}

import { dulceRouter } from "./dulce/infrastructure/dulceRouter";
import { sucursalRouter } from "./sucursal/infrastructure/sucursalRouter";

const app = express();

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());

app.use('/dulce', dulceRouter);
app.use('/sucursal', sucursalRouter);

const iniciarServidor = async() => {
    try{
        app.listen(process.env.PORT, () => {
            signale.success('Api Running on port ' + process.env.PORT);
        });
        await runDatabase();
    }catch(error){
        signale.error("couldn't run the api, check app.ts", error);
    }
}

iniciarServidor();