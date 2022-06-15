import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //En este apartado se escibre la logica del componente 
  //variable o propiedad 
  title = '';

  //variables para la calculadores 
  numero1:number=0;
  numero2:number=0;
  resultado:number=0;
 
  //Constructor de la clase dentro de la logica del componente principal 
  constructor(){
    //console.log("Hola tio");
  }

  //Funciones para la calculadora
  sumar():void{
    this.resultado=this.numero1+this.numero2;
  }
 
  restar():void{
    this.resultado=this.numero1-this.numero2;
  }

}
