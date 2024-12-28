import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../users.services';
import { Observable } from 'rxjs';
import { IUser} from '../../models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  user$: Observable< IUser | undefined>
  
  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private userServices: UsersService)

    // Para ver el detalle de los usuarios
    {
      this.user$ = this.userServices.getUsersById(parseInt(this.activatedRoute.snapshot.params['id']));
  // {
  //   this.activatedRoute.params.subscribe({
  //     next: (v) => console.log('OBSERVABLE', v['id']),
  //   });
  

    console.log('SNAPSHOT' ,this.activatedRoute.snapshot.params['id']);
  }

  cambiarParametro(): void {
    this.router.navigate(['dashboard', 'users', Math.random().toFixed(2)]);
  }

}
