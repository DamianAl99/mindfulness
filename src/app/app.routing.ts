import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//rutas, path

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { VideosComponent } from './components/videos/videos.component';
import { YgParaguayComponent } from './components/yg-paraguay/yg-paraguay.component';
import { EjercicioComponent } from './components/ejercicio/ejercicio.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'menu', component: HomeComponent},
    {path: 'productos', component: ProductsComponent},
    {path: 'videos', component: VideosComponent},
    {path: 'ejercicios', component: EjerciciosComponent},
    {path: 'centros', component: YgParaguayComponent},
    {path: 'detalles-ejercicios/:id', component: EjercicioComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);