import { Component, OnInit } from '@angular/core';
import { DataServices } from '../data.serviceFirebase';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  //Constructor de la clase dentro de la logica del componente principal 
  //Ademas tiene inyectado el servicio de empleados.
  constructor(private miServicio:ServicioEmpleadosService,private dataServFirebase:DataServices){
    //console.log("Hola tio");
    //this.empleados=this.miServicio.empleados;

    this.entradas=[
      {titulo: "Python cada dia mas presente"},
      {titulo: "Java presente desde hace mas de 20 años"},
      {titulo: "javascript cada dia mas funcional"},
      {titulo: "Donde quedo pascal"},
    ];
  }

  ngOnInit(): void {
    //this.empleados=this.miServicio.empleados;
    //Ahora lo cargamos desde la base de datos 
    //console.log(this.dataServFirebase.traerEmpleados());
    //Nos suscribimos 
    this.dataServFirebase.traerEmpleados().subscribe(misEmpleados=>{
      console.log(misEmpleados);
      //guardamos los datos que nos vienen en el array
      this.empleados=Object.values(misEmpleados);
      this.miServicio.setEmpleados(this.empleados);
    });
  }

  //variables para la calculadores 
  numero1:number=0;
  numero2:number=0;
  resultado:number=0;
  entradas:any[];

  //Variable de tipo empleado situada en app>empleado.model.ts y agregamos unos cuantos empleados 
  empleados:Empleado[]=[];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
 
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
  }

  //Funciones para la calculadora
  sumar():void{
    this.resultado=this.numero1+this.numero2;
  }
 
  restar():void{
    this.resultado=this.numero1-this.numero2;
  }

  //DIRECTIVAS 1 DEL CURSO 
  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  cargo:string="";

  registrarUsuario(){
    //Cuando se pulsa el boton se cambia a true 
    this.registrado=true;
    this.mensaje="Usuario Registrado con Exito";
  }

}
