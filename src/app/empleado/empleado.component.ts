import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:`
  //  <p>Aqui va el primer empleado</p>
  //`,
  //styleUrls: ['./empleado.component.css']
  //styles:['p{background-color: blue;}']
  styles:[]

})
export class EmpleadoComponent implements OnInit {
  
  //Propiedades de un empleado 
  nombre="Alfonso";
  apellido="Casado";
  private edad=31;
  edad2=31;
  empresa="Quality Afronta Solutions";
  

  //Funcion que dice si es mayor 
  mayor(edad:number):boolean { 
    if (edad > 18) {
      return true;
    }else{
      return false;
    }
  }
  
  //Funcion que devuelve la edad 
  getEdad(){
    return this.edad;
  }

  constructor() { }

  ngOnInit(): void {
  }


}
