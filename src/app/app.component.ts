import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //En este apartado se escibre la logica del componente 
  //variable o propiedad 
  title = 'PruebasAngular';
 
  //Constructor de la clase dentro de la logica del componente principal 
  constructor(){
    console.log("Hola tio");
  }
 
}
