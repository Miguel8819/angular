import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UsersModule } from './pages/users/users.module';
import { PipesYDirectivasModule } from './pages/pipes-y-directivas/pipes-y-directivas.module';
import { ProductsModule } from './pages/products/products.module';

import { Clase10Rxjs2Module } from './pages/clase-10-rxjs-2/clase-10-rxjs-2.module';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    UsersModule,
    PipesYDirectivasModule,
    ProductsModule,
    SharedModule,
    Clase10Rxjs2Module,
    MatListModule,

  ],
  exports:[
    DashboardComponent,
    
  ],
})
export class DashboardModule { }
