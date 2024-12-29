import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IUser } from "../../app/layouts/dashboard/pages/users/models";

@Injectable({ providedIn: 'root'})
export class AuthService {
    private _authUser$ = new BehaviorSubject<IUser | null>(null);
    public authUser$ = this._authUser$.asObservable();


    login(): void {
        this._authUser$.next({
            id: 1,
          createdAt: new Date(),
          email: 'email@goku.com',
          firstName: 'Goku', 
          lastName: 'Son',
          role: 'ADMIN',
        });

        
    }

    logout (): void {
        this._authUser$.next(null);
    }
}