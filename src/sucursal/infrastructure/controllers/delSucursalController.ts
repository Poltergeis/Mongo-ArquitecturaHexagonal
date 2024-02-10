import { Request,Response } from "express";
import { DelSucursalUseCase } from "../../application/delSucursalUseCase";

export class DelsucursalController {
    constructor(readonly delSucursalUseCase:DelSucursalUseCase){}

    async run(req:Request,res:Response){
        try{
            const { nombre } = req.params;
            const sucursal = this.delSucursalUseCase.run(nombre);

            if(!sucursal){
                return res.status(404).send({
                    status: "error",
                    message: "sucursal not found"
                });
            }

            return res.status(200).send({
                status: "success",
                data: sucursal,
                message: "found deletable sucursal, deleted"
            });
        }catch(error){
            return res.status(500).send({
                status: "error",
                error: "internal server error, check delsucursal controller"
            });
        }
    }
}