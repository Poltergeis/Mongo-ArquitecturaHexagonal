import { SucursalRepository } from "../domain/sucursalRepository";
import { Sucursal } from "../domain/sucursal";

export class DelSucursalUseCase {
    constructor(readonly sucursalRepository:SucursalRepository){}

    async run(nombre:string):Promise<Sucursal | null>{
        try {
            const sucursales = await this.sucursalRepository.delSucursal(nombre);
            return sucursales;
        } catch (error) {
            console.log('use case error, check delsucursal use case',error);
            return null;
        }
    }
}