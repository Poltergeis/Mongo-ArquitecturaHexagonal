import { Sucursal } from "./sucursal";

export interface SucursalRepository {
    addSucursal(
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
    ): Promise<Sucursal | null>;

    getAllSucursal(): Promise<Sucursal[]>;

    delSucursal(nombre:string): Promise<Sucursal | null>;

    clearSucursales(): Promise<null>
}