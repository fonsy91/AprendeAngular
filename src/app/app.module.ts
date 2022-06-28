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


@NgModule({
  declarations: [
    AppComponent, EmpleadosComponent, EmpleadoComponent, EmpleadoHijoComponent, CaracteristicasNietoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
