import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnDestroy {
  constructor(private authservice: AuthService, private router: Router){}

  ngOnDestroy(): void {
    
  }

  subscribeToAuthUserChange(): void {
    this.authservice.authUser$.subscribe({
      next: (authUser) =>{ 
        if (authUser != null) {
           this.router.navigate(['dashboard', 'home']);     
      
        }
      },  
    
    });
  }
  
  login(){
    this.authservice.login();
  }

}
