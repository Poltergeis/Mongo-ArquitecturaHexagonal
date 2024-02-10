import { Sucursal } from "../domain/sucursal";
import { SucursalRepository } from "../domain/sucursalRepository";

export class AddSucursalUseCase {
    constructor(readonly sucursalRepository:SucursalRepository){}

    async run(
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
    ):Promise<Sucursal | null>{
        try{
            const sucursal = await this.sucursalRepository.addSucursal(nombre,valorInmobiliario,promedioClientes,ciudad,empleados);
            return sucursal;
        }catch(error){
            console.log('error en addSucursal use case',error);
            return null;
        }
    }
}