import { AddSucursalUseCase } from "../../application/addSucursalUseCase";
import { Request,Response } from "express";

export class AddSucursalController {
    constructor(readonly addSucursalUseCase: AddSucursalUseCase){}

    async run(req:Request,res:Response){
        try{
            const data : {
                nombre:string,
                valorInmobiliario:number,
                promedioClientes:number,
                ciudad:string,
                empleados:[
                    {
                        nombre:string,
                        salario:number
                    }
                ]
            } = req.body;
            if(!data){
                return res.status(404).send({
                    status: "error",
                    message: "didn't get any body from request"
                });
            }
            const sucursal = await this.addSucursalUseCase.run(data.nombre,data.valorInmobiliario,data.promedioClientes,
                                                                                            data.ciudad,data.empleados);
            if(!sucursal){
                return res.status(400).send({
                    status: "error",
                    message: "couldn't create a new sucursal, check data requeriments"
                });
            }
            return res.status(201).send({
                status: "success",
                data: sucursal,
                message: "new sucursal has been successfully added"
            });
        }catch(error){
            return res.status(500).send({
                status: "error",
                error: "internal server error, check add sucursal controller"
            });
        }
    }
}