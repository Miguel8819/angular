import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IUser } from "../../app/layouts/dashboard/pages/users/models";
import { LoginData } from "../../app/layouts/auth/models";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root'})
export class AuthService {
    private MOCK_AUTH_USER: IUser = {
        
            id: 1,
            createdAt: new Date(),
            email: 'email@goku.com',
            firstName: 'Goku', 
            lastName: 'Son',
            role: 'ADMIN',
          

    }
    private _authUser$ = new BehaviorSubject<IUser | null>(null);
    public authUser$ = this._authUser$.asObservable();

    constructor(private router: Router){}


    login(data: LoginData ): void {
        console.log('inicio')

        if(data.email !== 'user@gmail.com' || data.password !== '123456'){
            alert('Correo o password incorrectos');
        } else{
            this._authUser$.next(this.MOCK_AUTH_USER);
            localStorage.setItem(
                'accessToken',
                'gjhgjhgjhhjgjhghjghj'

            );
            this.router.navigate(['dashboard', 'home'])
        }
        
    }

    verifyToken(): boolean{
      const token = localStorage.getItem('accessToken');
      
      if (token) {
        this._authUser$.next(this.MOCK_AUTH_USER);
        return true;
      } else {
        return false;
      }
    } 

    logout (): void {
        this._authUser$.next(null);
        localStorage.removeItem('accessToken');
    }
}