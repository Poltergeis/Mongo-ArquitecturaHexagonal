import { GetAllDulcesUseCase } from "../../application/useCases/getAllDulcesUseCase";
import { Request,Response } from "express";

export class GetAllDulcesController {
    constructor(readonly getAllDulcesUseCase: GetAllDulcesUseCase){}

    async run(req:Request,res:Response){
        try{
            const dulces = await this.getAllDulcesUseCase.run();
            if(dulces){
                return res.status(200).send({
                    status: "success",
                    data: dulces,
                    message: "successfully got all dulces from data base"
                });
            }else{
                return res.status(404).send({
                    status: "error",
                    error: "couldn't get any dulce from data base, check if your collection has any data saved, if not,\n" +
                    "check getAll dulces useCase or Controller files for logical error"
                });
            }
        }catch(error){
            return res.status(500).send({
                status: "error",
                error: `error handling getAll dulces request, check get all dulce controller or useCase files.\n${error}`
            });
        }
    }
}