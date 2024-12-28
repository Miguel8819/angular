import { Injectable } from "@angular/core";
import { IUser } from "./models";
import { delay, Observable, of } from "rxjs";

const USERS_DB: IUser[]= [
     {
          id: 1,
          firstName: 'naruto',
          lastName: 'kasaki',
          email: 'nar@gass.com',
          role: 'ADMIN',
          createdAt: new Date ()
        },
        {
          id: 2,
          firstName: 'sasuke',
          lastName: 'icha',
          email: 'sas@gass.com',
          role: 'USER',
          createdAt: new Date ()
        },
]

@Injectable({ providedIn: 'root'})
export class UsersService{

    getUsers():Observable<IUser[]>{
        return of(USERS_DB).pipe(delay(2000));
    }

    getUsersById(id:number): Observable<IUser | undefined>{
      return of (USERS_DB.find((el)=>el.id === id))
    }
}