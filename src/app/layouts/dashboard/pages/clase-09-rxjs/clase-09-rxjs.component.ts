import { Component } from '@angular/core';

@Component({
  selector: 'app-clase-09-rxjs',
  templateUrl: './clase-09-rxjs.component.html',
  styleUrls: ['./clase-09-rxjs.component.scss'],
  standalone: true,
})
export class Clase09RxjsComponent {
  constructor() {
     this.obtenerResultado();
  }
  async obtenerResultado(){
    console.log('inicio');

    const meDevolveraElDinero = new Promise((resolve)=> {
      setTimeout(()=> {
        resolve(true);
      }, 3000);
    } );

await meDevolveraElDinero.then((resultado) => {
      console.log(resultado);
    });
    console.log('final');
    
  }

}
