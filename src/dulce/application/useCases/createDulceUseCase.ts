import { DulceRepository } from "../../domain/dulceRepository";
import { Dulce } from "../../domain/dulce";

export class CreateDulceUseCase {
    constructor(readonly dulceRepository: DulceRepository){}

    async run(
        tipoSabor: string,
        sabor: string,
        marca: string,
        precio: number,
        stock: number,
        contenidoCalorico: string
    ):Promise<Dulce | null>{
        try{
            const dulce = await this.dulceRepository.createDulce(
                tipoSabor,
                sabor,
                marca,
                precio,
                stock,
                contenidoCalorico
            );
            return dulce;
        }catch(error){
            console.log('create dulce use case error',error);
            return null;
        }
    }
}