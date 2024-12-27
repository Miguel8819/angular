import { Component, OnInit } from '@angular/core';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { UsersService } from './users.services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = [
    'id', 
    'firstName', 
    'lastName', 
    'email',
    'role', 
    'createdAt',
    'actions',
  ];
  
  loading = false;

  users: IUser[] =[
   
  ]

  constructor (private matDialog: MatDialog, private usersService: UsersService) {} 

  ngOnInit(): void {
    this.loading = true;
    this.usersService.getUsers().subscribe({
      next: (users) => {
        console.log('next: ', users)
      },
      error: (err)=> {
        console.log('error: ', err)
      },
      complete: () => {
        
        console.log('complete!');
        this.loading = false;
      }
    }) 
  }

  openDialog(editingUser?:IUser): void{
    this.matDialog
    .open(UserDialogComponent, {
      data:editingUser,
    })
    .afterClosed()
    .subscribe({
     next: (result) => {
      if(result){
        if (editingUser){
          // ACTUALIZAR EL USUARIO EN EL ARRAY
          // map lo que hace es recorrer el array uno en uno y mapea, transforma la salida.
          this.users = this.users.map((u)=>
          u.id === editingUser.id ? {...u, ...result} : u
          );

        }
        else{
          //LOGICA PARA CREAR EL USUARIO
        result.id = new Date().getTime().toString().substring(0, 3);
        result.createdAt = new Date();
        this.users = [...this.users, result];
        }
        
      }
     },  
    });
  }
  
  onDeleteUser(id:number): void {
    if (confirm('¿Está seguro?')){

    this.users = this.users.filter((u)=> u.id != id);
  }
  
}
}