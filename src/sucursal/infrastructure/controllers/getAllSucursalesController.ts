import { Request,Response } from "express";
import { GetAllSucursalesUseCase } from "../../application/getAllSucursalesUseCase";

export class GetAllSucursalesController {
    constructor(readonly getAllSucursalesUseCase: GetAllSucursalesUseCase){}

    async run(req:Request,res:Response){
        try{
            const sucursales = await this.getAllSucursalesUseCase.run();
            if(!sucursales){
                return res.status(404).send({
                    status: "error",
                    message: "didn't get any sucursal from database, check if there are sucursal existing in the database/check getAll sucursales controller"
                });
            }
            return res.status(200).send({
                status: "success",
                data: sucursales,
                message: "got all sucursales from database"
            });
        }catch(error){
            return res.status(500).send({
                status: "error",
                error: "internal server error, check getAll sucursales controller"
            });
        }
    }
}