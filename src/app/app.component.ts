import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  //En este apartado se escibre la logica del componente 
  //variable o propiedad 
  title = '';

  constructor(){
    
  }

  ngOnInit(): void {
   
  }

  


}
