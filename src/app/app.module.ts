import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { UserDetailComponent } from './dashboard/layouts/pages/users/pages/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DashboardModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
