import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {enableProdMode} from '@angular/core';
enableProdMode();

import { routing, appRoutingProviders} from "./app.routing";/*es para que anden las rutas paths*/
import { HttpClientModule } from "@angular/common/http";/*es para el get post y demas*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { VideosComponent } from './components/videos/videos.component';
import { ProductsComponent } from './components/products/products.component';
import { YgParaguayComponent } from './components/yg-paraguay/yg-paraguay.component';
import { EjercicioComponent } from './components/ejercicio/ejercicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EjerciciosComponent,
    VideosComponent,
    ProductsComponent,
    YgParaguayComponent,
    EjercicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
