export class Sucursal {
    constructor(
        readonly nombre:string,
        readonly valorInmobiliario:number,
        readonly promedioClientes:number,
        readonly ciudad:string,
        readonly empleados:[
            {
                readonly nombre:string,
                readonly salario:number
            }
        ]
    ){}
}