import { Component, OnInit } from '@angular/core';
import { SalesService } from './sales.service';
import { ISale } from './models';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent implements OnInit {
  // explicacion: El componente tiene un array  [] de ventas que esta vacio. desde el constructor Inyecta un servicio para consultarlas.  cuando el componente se inicializa (ngOnInit) llama a la funcion loadSales que llama al servicio, se subscribe. Y cuando llega la emision del servicio (next), asigna el valor de las ventas que lleguen al ISale[] y desde el HTML se muestran en pantalla.

  sales: ISale[] = [];

  constructor(private saleService: SalesService){}


  ngOnInit(): void {
    this.loadSales();
  }

  loadSales() {
    this.saleService.getSales().subscribe({
      next: (sales) => {
        this.sales = sales;
      },
      error: () => {},
      complete: () => {}
    })
  }

}
