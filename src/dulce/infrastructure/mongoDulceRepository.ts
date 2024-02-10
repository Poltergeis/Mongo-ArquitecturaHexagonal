import { Dulce } from "../domain/dulce";
import { DulceRepository } from "../domain/dulceRepository";
import DulceModel from "./models/dulceModel";

export class PgsqDulceRepository implements DulceRepository {
    async createDulce(tipoSabor: string, sabor: string, marca: string, precio: number, stock: number, contenidoCalorico: string)
    : Promise<Dulce | null> {
        try{
            const nuevoDulce = new Dulce(tipoSabor,sabor,marca,precio,stock,contenidoCalorico);
            const mongoNuevoDulce = await DulceModel.create({
                tipoSabor: nuevoDulce.tipoSabor,
                sabor: nuevoDulce.sabor,
                marca: nuevoDulce.marca,
                precio: nuevoDulce.precio,
                stock: nuevoDulce.stock,
                contenidoCalorico: nuevoDulce.contenidoCalorico
            });
            await mongoNuevoDulce.save();
            return nuevoDulce;
        }catch(error){
            console.log('error creating document Dulce, check mongoDulceRepository.ts file',error);
            return null;
        }
    }

    async getAllDulces(): Promise<Dulce[]> {
        try{
            const dulces:Array<Dulce> = await DulceModel.find(); 
            return dulces;
        }catch(error){
            console.log('system error handling getAll dulces function, check mongoDulceRepository.ts file',error);
            return [];
        }
    }
}