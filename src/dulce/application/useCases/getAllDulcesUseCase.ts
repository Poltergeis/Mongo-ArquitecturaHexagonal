import { Dulce } from "../../domain/dulce";
import { DulceRepository } from "../../domain/dulceRepository";

export class GetAllDulcesUseCase {
    constructor(readonly dulceRepository: DulceRepository){}

    async run():Promise<Dulce[]>{
        try{
            const dulces = await this.dulceRepository.getAllDulces();
            return dulces;
        }catch(error){
            console.log('getAll use case error',error);
            return [];
        }
    }
}