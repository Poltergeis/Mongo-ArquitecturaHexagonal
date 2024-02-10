import { Dulce } from "./dulce"

export interface DulceRepository {
    createDulce(
        tipoSabor: string,
        sabor: string,
        marca: string,
        precio: number,
        stock: number,
        contenidoCalorico: string
    ): Promise<Dulce | null>;

    getAllDulces():Promise<Dulce[]>;
}