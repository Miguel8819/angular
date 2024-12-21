import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription, forkJoin, of } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { IUser } from '../users/models';

@Component({
  selector: 'app-clase-10-rxjs-2',
  templateUrl: './clase-10-rxjs-2.component.html',
  styleUrls: ['./clase-10-rxjs-2.component.scss']
})
export class Clase10Rxjs2Component implements OnInit, OnDestroy {

  private obtenerUsuarioSubscription?: Subscription;
  cambioElUsuario$ = new Subject<boolean>();
  usuarioAutenticado$= new BehaviorSubject<IUser | null>(null);
  componenteDestruido$ = new Subject<void>();
  componenteDestruidoBehavior$ = new BehaviorSubject(false);

  usuarios: IUser[] = [];
  roles: string[] = [];

  cargando = false;

  getRoles(): Observable<string []> {
    
    return of ([
      'ADMIN', 'USER', 'STUDENT', 'TEACHER'
    ]).pipe(delay(1500))
    };
  

  getUsers(): Observable<IUser[]> {
    const USERS_DB: IUser[] = [
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
    ];
    
    return of(USERS_DB)
    .pipe(delay(3000))
     
    };
  

  login(): void {
    this.cambioElUsuario$.next(true);
  }

  ngOnInit(): void {
    this.cargando = true;
    forkJoin([this.getUsers(), this.getRoles()]).subscribe({
      next: (value) => {
        this.usuarios = value[0];
        this.roles = value[1];
        console.log(value);
      },
      complete: () => {
        this.cargando = false;
      }
    });
    
    
        

    const obtenerUsuario$ = new Observable<number>((observer) => {
      let counter = 0;
      const interval = setInterval(() => {
        counter++;
        observer.next(counter);
      }, 1000);

      return () => clearInterval(interval);
    });

    obtenerUsuario$
      .pipe(takeUntil(this.componenteDestruidoBehavior$))
      .subscribe({
        next: (v) => console.log(v)
      });

    this.cambioElUsuario$.subscribe({
      next: () => {
        this.usuarioAutenticado$.next({
          id: 1,
          createdAt: new Date(),
          email: 'email@goku.com',
          firstName: 'Goku',
          lastName: 'Son',
          role: 'ADMIN',
        });
      },
    });

    this.usuarioAutenticado$.subscribe({
      next: (value) => console.log(value),
    });
  }

  ngOnDestroy(): void {
    this.componenteDestruidoBehavior$.next(true);
    this.componenteDestruidoBehavior$.complete();
    this.componenteDestruido$.next();
    this.componenteDestruido$.complete();
  }
}
