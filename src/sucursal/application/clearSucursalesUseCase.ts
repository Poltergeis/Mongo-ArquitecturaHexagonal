import { SucursalRepository } from "../domain/sucursalRepository";
import { Sucursal } from "../domain/sucursal";

export class ClearSucursalesUseCase {
    constructor(readonly sucursalRepository:SucursalRepository){}

    async run():Promise<null>{
        try {
            await this.sucursalRepository.clearSucursales();
            return null;
        } catch (error) {
            console.log('use case error, check clearsucursales use case',error);
            return null;
        }
    }
}