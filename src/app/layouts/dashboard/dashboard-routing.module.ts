import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from '../../core/guards/admin.guard';
import { unsavedChangesGuard } from '../../core/guards/unsaved-changes.guard';


const routes: Routes = [
  {

    path: 'home',
    loadChildren:() => import('./pages/home/home.module').then((m) => m.HomeModule), 
  },
  
  {
    path: 'users',
    canActivate: [adminGuard],
    loadChildren: () => 
      import('./pages/users/users.module').then((m) =>m.UsersModule),
  },

  {
    path: 'products',
    loadChildren:() =>
      import('./pages/products/products.module').then((m) =>m.ProductsModule),
  },

  {
    path:'sales',
    canDeactivate: [unsavedChangesGuard],
    loadChildren: () =>
      import('./pages/sales/sales.module').then((m) =>m.SalesModule),
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
