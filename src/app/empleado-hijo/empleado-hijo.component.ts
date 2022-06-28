import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {

  //Con esto le decimos al hijo que va a recibir dos datos del componente padre 
  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;

  //Array donde se almacenaran las caracteristicas 
  arrayCaracteristicas=[''];  

  //Funcion que agrega las caracteristicas al array
  agregarCaracteristica(nuevaCaracteristica:string){
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
