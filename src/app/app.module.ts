import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Importacion de modulo para bases de datos 
import {HttpClientModule} from '@angular/common/http';

//Creado por mi para las rutas ya se vera mas adelante 
import { AppRoutingModule } from './app-routing.module';

//Componente principal 
import { AppComponent } from './app.component';

//Componentes creados por mi
import { EmpleadosComponent } from './Empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasNietoComponent } from './caracteristicas-nieto/caracteristicas-nieto.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { AplicacionComponent } from './aplicacion/aplicacion.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';

//Servicios creados por mi
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataServices } from './data.serviceFirebase';

//Rutas 
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';



//Creamos una constante de rutas de aplicacion 
const appRoute:Routes=[
  {path:'', component:HomeComponentComponent},
  //Preparamos a esta ruta para que contenga un parametro
  {path:'quienes/:id',component:QuienesComponentComponent},
  {path:'aplicacion',component:AplicacionComponent},
  {path:'login',component:LoginComponent},
  //los ** indica a angular que cualquier cosa que no sea una de las rutas que tenemos ira a esta ruta 
  {path:'**',component:ErrorPersonalizadoComponent}

];

@NgModule({
  declarations: [
    AppComponent, 
    EmpleadosComponent, 
    EmpleadoComponent, 
    EmpleadoHijoComponent, 
    CaracteristicasNietoComponent, 
    HomeComponentComponent, 
    QuienesComponentComponent, 
    AplicacionComponent, 
    ErrorPersonalizadoComponent, 
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule
    
  ],
  providers: [
    ServicioEmpleadosService,
    DataServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
