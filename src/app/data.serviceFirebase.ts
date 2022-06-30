import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

//En esta clase se programara todo el servicio con la base de datos en FireBase
@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient){

    }

    guardarEmpleados(empleados:Empleado[]){
        this.httpClient.put('https://mis-clientes-947ad-default-rtdb.europe-west1.firebasedatabase.app/datos.json',empleados).subscribe(
            response=>console.log("Se han guardado los empleados: ",response),
            error=>console.log("Error: ",error),
        );
    }

    traerEmpleados(){
        return this.httpClient.get('https://mis-clientes-947ad-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
    }
}