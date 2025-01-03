import { Component, OnInit } from '@angular/core';
import { SalesService } from './sales.service';
import { ICreatesaleData, ISale } from './models';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../products/products.service';
import { IProduct } from '../products/models';
import { UsersService } from '../users/users.services';
import { IUser } from '../users/models';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent implements OnInit {
  // explicacion: El componente tiene un array  [] de ventas que esta vacio. desde el constructor Inyecta un servicio para consultarlas.  cuando el componente se inicializa (ngOnInit) llama a la funcion loadSales que llama al servicio, se subscribe. Y cuando llega la emision del servicio (next), asigna el valor de las ventas que lleguen al ISale[] y desde el HTML se muestran en pantalla.

  sales: ISale[] = [];
  products: IProduct[] = [];
  users: IUser[] = [];
  
  isLoading = false;


  saleForm = new FormGroup({
      quantity: new FormControl(1),
      buyer: new FormControl(null),
      product: new FormControl(null),
  });

  constructor(
    private saleService: SalesService, 
    private productService: ProductsService,
    private usersService: UsersService,
  
  ){}


  ngOnInit(): void {
    this.loadSales();
    this.loadProducts();
    this.loadUsers();
  }

  createSale() {
    this.saleService.createSales(this.saleForm.getRawValue()).subscribe({
      next: (sales) => {
        console.log(sales);
      },
    });
  }

  loadUsers() {
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
    })
  }

  loadProducts(){
    this.products = this.productService.getProducts();
  }

  loadSales() {
    this.isLoading = true;
    this.saleService.getSales().subscribe({
      next: (sales) => {
        this.sales = sales;
      },
      error: () => {},
      complete: () => {
        this.isLoading = false;
      }
    })
  }

}
