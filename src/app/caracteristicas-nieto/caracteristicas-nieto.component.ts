import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-nieto',
  templateUrl: './caracteristicas-nieto.component.html',
  styleUrls: ['./caracteristicas-nieto.component.css']
})
export class CaracteristicasNietoComponent implements OnInit {

  //EventEmitter<string>() indica que el flujo de datos del hijo al padre sera de tipo string 
  //y con el new le dice a angular que se va a crear un nuevo evento y se emitiran datos de tipos string 
  @Output() caracteristicasEmpelados = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  //Funcion que agrega las caracteristicas 
  agregarCaracteristicas(value:string){
    this.caracteristicasEmpelados.emit(value);
  }

}
