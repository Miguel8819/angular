import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ISale } from "./models";


//BASE DE DATOS

let SALES_DB: ISale[] = [
     {
        id:1,
        buyer:{
            id: 1,
            createdAt: new Date(),
            email: 'somemail.com',
            firstName: 'TEST',
            lastName: 'TEST',
            role: 'USER',
        },
        product:{
            id: 1,
            name: 'IPAD',
            price:1000,
        },
        quantity: 2
     },
];

@Injectable({ providedIn: 'root'})
export class SalesService {
    // CRUD
    //getSales: retorna un observable con el array de ventas
    getSales(): Observable<ISale[]> {
        return of(SALES_DB);
    }
    
    createSales(data: ISale) {
        SALES_DB.push(data);
        return of(SALES_DB);
    }
     
    //retorna la base de datos pero filtramos la venta cuyo id sea diferente de la venta que queremos eliminar 
    deleteSales (id:number) {
        return of (SALES_DB.filter((sale) => sale.id != id))
    }
    
    // nesecito el id y la data para identificar cual quiero actualizar. ...sale: crea un elemento con todos las propiedades de la venta original. ...data: pisa las propiedades con los nuevos datos que actualizamos.
    updateSales(id:number, data:ISale) {
        return of (
            SALES_DB.map((sale) => (sale.id === id ? {... sale, ...data} : sale))
        );
    }
    
}