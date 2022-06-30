import { Injectable } from '@angular/core';
import { DataServices } from './data.serviceFirebase';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {
  //Aqui programamos lo que queremos que haga este servicio

  constructor(private dataServFirebase:DataServices) { }

  //En este caso es un array de objetos de tipo empleado pero lo normal es que los datos vengan de una base de datos
  //o de una API que proporcione datos.
  empleados:Empleado[]=[];
  /*
  empleados:Empleado[]=[
    new Empleado("Juan","Perez","Programador",1200),
    new Empleado("Jaime","Daniel","Programador",1300),
    new Empleado("Luis","Sanz","Programador",1400),
    new Empleado("Laura","Briant","Programador",1500)
  ];
  */

  muestraMensaje(mensaje:string){
    alert(mensaje);
  }

  agregarEmpleadoServicio(empleado:Empleado){
    this.empleados.push(empleado);
    this.dataServFirebase.guardarEmpleados(this.empleados);
  }

  econtrarEmpleado(indice:number){
    let empleado:Empleado=this.empleados[indice];
    return empleado;
  }

  actualizarEmpleado(indice:number, empleado:Empleado){
    let empleadoModificado=this.empleados[indice];
    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;
  }

  eliminarEmpleado(indice:number){
    this.empleados.splice(indice,1);
  }

  obtenerEmpleados(){
    this.dataServFirebase.traerEmpleados();
    //esto devuelve un observable 
  }

  setEmpleados(misEmpleados:Empleado[]){
    this.empleados=misEmpleados;
  }

}
