import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = 'Maryann Perpol';
  saldo = 50.5;
  dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
  fechaActual = new Date();
   articulos = [{
        codigo: 2,
        descripcion: "manzanas",
        precio: 54
      },
      {
        codigo: 3,
        descripcion: "sandía",
        precio: 14
      }
    ]
}
