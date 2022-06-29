import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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

//Servicios creados por mi
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { RouterModule, Routes } from '@angular/router';
import { AplicacionComponent } from './aplicacion/aplicacion.component';

//Creamos una constante de rutas de aplicacion 
const appRoute:Routes=[
  {path:'', component:HomeComponentComponent},
  //Preparamos a esta ruta para que contenga un parametro
  {path:'quienes/:id',component:QuienesComponentComponent},
  {path:'aplicacion',component:AplicacionComponent}

];

@NgModule({
  declarations: [
    AppComponent, 
    EmpleadosComponent, 
    EmpleadoComponent, 
    EmpleadoHijoComponent, 
    CaracteristicasNietoComponent, 
    HomeComponentComponent, 
    QuienesComponentComponent, AplicacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [ServicioEmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
