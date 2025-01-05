import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { IUser } from './pages/users/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;

  mostrarComponent =true;

  authUser$: Observable<IUser | null>;

  authUserSinPipe: IUser | null = null;
  authUserSubscription?: Subscription;

  constructor(private authService:AuthService, private router: Router){
    this.authUser$ = this.authService.authUser$;
  }

  ngOndestroy(): void{
    this.authUserSubscription?.unsubscribe();
  }

  ngOnInit (): void {
    this.authUserSubscription = this.authService.authUser$.subscribe({
      next: (user) => {
        this.authUserSinPipe = user;
      },
    })
  }



  logout(): void  {
    this.authService.logout();
    this.router.navigate(['auth']);
  }

  isMobile(): boolean{

    return window.innerWidth <=280;
  }

}
