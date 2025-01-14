import { Injectable } from "@angular/core";
import { IUser } from "./models";
import { delay, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";



@Injectable({ providedIn: 'root'})
export class UsersService{

  constructor(private httpClient: HttpClient){}

    getUsers():Observable<IUser[]>{
      // colocamos la url y nos retorna los usuarios
      return this.httpClient.get<IUser[]>('http://localhost:3000/users')
        // return of(USERS_DB).pipe(delay(1500));
    }

    getUsersById(id: string): Observable<IUser | undefined>{
      return this.httpClient.get<IUser>('http://localhost:3000/users/'+ id);
    }
}