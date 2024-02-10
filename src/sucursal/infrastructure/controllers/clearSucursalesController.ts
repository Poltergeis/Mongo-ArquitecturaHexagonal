import { ClearSucursalesUseCase } from "../../application/clearSucursalesUseCase";
import { Request,Response } from "express";

export class ClearSucursalesController {
    constructor(readonly clearSucursalesUseCase:ClearSucursalesUseCase){}

    async run(req:Request,res:Response){
        try{
            await this.clearSucursalesUseCase.run();
            return res.status(200).send({
                status: "success",
                message: "sucursales collection cleared"
            });
        }catch(error){
            return res.status(500).send({
                status: "error",
                error: "internal server error, check clearSucursales controller"
            });
        }
    }
}