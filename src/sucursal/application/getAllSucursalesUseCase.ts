import { Sucursal } from "../domain/sucursal";
import { SucursalRepository } from "../domain/sucursalRepository";

export class GetAllSucursalesUseCase {
    constructor(readonly sucursalRepository:SucursalRepository){}

    async run():Promise<Sucursal[]>{
        try{
            const sucursales = await this.sucursalRepository.getAllSucursal();
            return sucursales;
        }catch(error){
            console.log('error un getAll use case',error);
            return [];
        }
    }
}