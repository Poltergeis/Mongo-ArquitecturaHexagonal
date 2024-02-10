import { deleteModel } from "mongoose";
import { Sucursal } from "../domain/sucursal";
import { SucursalRepository } from "../domain/sucursalRepository";
import sucursalModel from "./models/sucursalModel";

export class PgsqSucursalRepository implements SucursalRepository {
    async addSucursal(nombre: string, valorInmobiliario: number, promedioClientes: number, ciudad: string, empleados: [{ nombre: string; salario: number; }]): Promise<Sucursal | null> {
        try{
            const newSucursal = new Sucursal(nombre,valorInmobiliario,promedioClientes,ciudad,empleados);
            const dbNewSucursal = await sucursalModel.create({
                nombre: newSucursal.nombre,
                valorInmobiliario: newSucursal.valorInmobiliario,
                promedioClientes: newSucursal.promedioClientes,
                ciudad: newSucursal.ciudad,
                empleados: newSucursal.empleados
            });
            await dbNewSucursal.save();
            return newSucursal;
        }catch(error){
            console.log('error while creating new Sucursal',error);
            return null;
        }
    }

    async getAllSucursal(): Promise<Sucursal[]> {
        try{
            const sucursales:Sucursal[] = await sucursalModel.find();
            if(!sucursales){
                return [];
            }
            return sucursales;
        }catch(error){
            return [];
        }
    }

    async delSucursal(nombre: string): Promise<Sucursal | null> {
        try{
            await sucursalModel.findOneAndDelete({ nombre:nombre });
            return null;
        }catch(error){
            return null;
        }
    }

    async clearSucursales(): Promise<null> {
        try{
            await sucursalModel.deleteMany();
            return null;
        }catch(error){
            return null;
        }
    }
}