import { CreateDulceUseCase } from "../../application/useCases/createDulceUseCase";
import { Request,Response } from "express";


export class CreateDulceController {
    constructor(readonly createDulceUseCase: CreateDulceUseCase){}

    async run(req:Request,res:Response){
        try{
            const data: {
                tipoSabor: string;
                sabor: string;
                marca: string;
                precio: number;
                stock: number;
                contenidoCalorico: string;
            } = req.body;
            
            let dulce = await this.createDulceUseCase.run(
                data.tipoSabor,
                data.sabor,
                data.marca,
                data.precio,
                data.stock,
                data.contenidoCalorico
            );
            if(dulce){
                return res.status(201).send({
                    status: "success",
                    data: {
                        tipoSabor: dulce.tipoSabor,
                        sabor: dulce.sabor,
                        marca: dulce.marca,
                        precio: dulce.precio,
                        stock: dulce.stock,
                        contenidoCalorico: dulce.contenidoCalorico
                    },
                    message: "dulce creado con exito"
                });
            }else{
                return res.status(400).send({
                    status: "error",
                    error: "dulce couldn't be got back from createDulceUseCase.ts"
                });
            }
        }catch(error){
            console.log('error during controller handling request',error);
            return res.status(500).send('error during request handling, check create dulce controller file');
        }
    }
}