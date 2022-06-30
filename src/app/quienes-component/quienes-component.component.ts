import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-quienes-component',
  templateUrl: './quienes-component.component.html',
  styleUrls: ['./quienes-component.component.css']
})
export class QuienesComponentComponent implements OnInit {

  empleados: Empleado[];
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  //parametro que se le pasa a la ruta 
  indice:number;

  constructor(private router:Router,private miServicio:ServicioEmpleadosService, private route:ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.empleados=this.miServicio.empleados;
    this.indice=this.route.snapshot.params['id'];
    let empleado:Empleado=this.miServicio.econtrarEmpleado(this.indice);
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
  }

  //Funcion para agregar un empleado
  agregarEmpleado(){
    //con esto cogemos un empleado introducido por el formulario 
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    //Ejecutamos la funcion de mi servicio 
    this.miServicio.muestraMensaje("Nombre del empleado: "+miEmpleado.nombre);
    //Introducimos dicho empleado en el array 
    //this.empleados.push(miEmpleado);
    //Hacemos uso del servicio 
    this.miServicio.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate([""]);
  }

  actualizaEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    //Usamos una funcion del servicio para actualizar un empleado 
    this.miServicio.actualizarEmpleado(this.indice,miEmpleado);
    this.router.navigate([""]);
  }

  eliminaEmpleado(){
    this.miServicio.eliminarEmpleado(this.indice);
    this.router.navigate([""]);
  }

  volverHome(){
    //Con navigate puedes hacer que la funcion vaya a la ruta que quieras ahora mismo va a home pero podrias poner 
    //"quienes" y nos llevaria a quienes somos 
    this.router.navigate([""]);
  }

}
