import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:`
  //  <p>Aqui va el primer empleado</p>
  //`,
  //styleUrls: ['./empleado.component.css']
  //styles:['p{background-color: blue;}']
  styles:[`
    #btnMod{
      margin-left: 10px;
    }
  `]

})
export class EmpleadoComponent implements OnInit {
  
  //Atributos de la clase 
  nombre="Alfonso";
  apellido="Casado";
  private edad=31;
  edad2=31;
  empresa="";
  empresa2="Google";

  //Propiedades Binding 
  //Ahora hacemos una union o puente entre esta propiedad y la de disable en el docuemnto html 
  habilitaCuadro=false; 
  habilitaBoton=true; 
  habilitacheckbox=false; 
  textoRegistro="No hay nadie registrado";

  //Funcion que dice si es mayor 
  mayor(edad:number):boolean { 
    if (edad > 18) {
      return true;
    }else{
      return false;
    }
  }

  llamaEmpresa(value:string){

  }

  cambiaEmpresa(event:Event){
    //casteamos el objeto HTML y cogemos el valor que introduce el usuario 
    //despues lo malmacenamos en la variable empresa de este modo hemos cogido 
    //un valor introducido por el usaurio y lo hemos guardado en una variable 
    this.empresa2=(<HTMLInputElement>event.target).value;
  }

  //Funcion que cambia el check 
  cambiaCheck(){
    this.habilitacheckbox=false;
  }

  //Funcion ventana emergente registro, se le pasa un evento 
  //Dependiendo del radio que haya pulsado recibire un evento si o no ya que le
  //hemos dado los value="si" value="no" esto es un objeto de tipo html 
  setVentana(event:Event){
    //alert("El usuario se acaba de registrar");
    //Con esta linea cogemos el valor si del radio a partir del objeto html que nos devuelve 
    if ((<HTMLInputElement>event.target).value == "si") {
       this.textoRegistro="El usuario se acaba de registrar";
    }else{
      this.textoRegistro="El usuario no esta registrado";
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
