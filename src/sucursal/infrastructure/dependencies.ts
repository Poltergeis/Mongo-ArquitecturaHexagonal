import { PgsqSucursalRepository } from "./mongoSucursalRepository";

import { AddSucursalUseCase } from "../application/addSucursalUseCase";
import { GetAllSucursalesUseCase } from "../application/getAllSucursalesUseCase";
import { DelSucursalUseCase } from "../application/delSucursalUseCase";
import { ClearSucursalesUseCase } from "../application/clearSucursalesUseCase";

import { AddSucursalController } from "./controllers/addSucursalController";
import { GetAllSucursalesController } from "./controllers/getAllSucursalesController";
import { DelsucursalController } from "./controllers/delSucursalController";
import { ClearSucursalesController } from "./controllers/clearSucursalesController";

export const pgsqSucursalRepository = new PgsqSucursalRepository();

export const addSucursalUseCase = new AddSucursalUseCase(pgsqSucursalRepository);
export const getAllSucursalesUseCase = new GetAllSucursalesUseCase(pgsqSucursalRepository);
export const delSucursalUseCase = new DelSucursalUseCase(pgsqSucursalRepository);
export const clearSucursalesUseCase = new ClearSucursalesUseCase(pgsqSucursalRepository);

export const addSucursalController = new AddSucursalController(addSucursalUseCase);
export const getAllSucursalesController = new GetAllSucursalesController(getAllSucursalesUseCase);
export const delSucursalController = new DelsucursalController(delSucursalUseCase);
export const clearSucursalesController = new ClearSucursalesController(clearSucursalesUseCase);