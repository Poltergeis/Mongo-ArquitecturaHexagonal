import { CreateDulceUseCase } from "../application/useCases/createDulceUseCase";
import { GetAllDulcesUseCase } from "../application/useCases/getAllDulcesUseCase";

import { CreateDulceController } from "./controllers/createDulceController";
import { GetAllDulcesController } from "./controllers/getAllDulcesController";

import { PgsqDulceRepository } from "./mongoDulceRepository";

export const pgsqDulceRepository = new PgsqDulceRepository();

export const createDulceUseCase = new CreateDulceUseCase(pgsqDulceRepository);
export const getAllDulcesUseCase = new GetAllDulcesUseCase(pgsqDulceRepository);

export const createDulceController = new CreateDulceController(createDulceUseCase);
export const getAllDulcesController = new GetAllDulcesController(getAllDulcesUseCase);