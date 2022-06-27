import { Component } from '@angular/core';
import { Empleado } from './empleado.model';


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
  entradas:any[];

  //Variable de tipo empleado situada en app>empleado.model.ts y agregamos unos cuantos empleados 
  empleados:Empleado[]=[
    new Empleado("Juan","Perez","Programador",1200),
    new Empleado("Jaime","Daniel","Programador",1300),
    new Empleado("Luis","Sanz","Programador",1400),
    new Empleado("Laura","Briant","Programador",1500)
  ];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
 
  //Constructor de la clase dentro de la logica del componente principal 
  constructor(){
    //console.log("Hola tio");

    this.entradas=[
      {titulo: "Python cada dia mas presente"},
      {titulo: "Java presente desde hace mas de 20 años"},
      {titulo: "javascript cada dia mas funcional"},
      {titulo: "Donde quedo pascal"},
    ];
  }

  //Funcion para agregar un empleado
  agregarEmpleado(){
    //con esto cogemos un empleado introducido por el formulario 
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    //Introducimos dicho empleado en el array 
    this.empleados.push(miEmpleado);
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
  

  registrarUsuario(){
    //Cuando se pulsa el boton se cambia a true 
    this.registrado=true;
    this.mensaje="Usuario Registrado con Exito";
  }

  


}
