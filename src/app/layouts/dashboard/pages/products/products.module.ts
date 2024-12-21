import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule, MatTableModule, SharedModule,
  ],
  exports:[ProductsComponent],
})
export class ProductsModule { }
