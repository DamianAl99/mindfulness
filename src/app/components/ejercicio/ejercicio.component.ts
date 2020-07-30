import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PracticasService } from '../../services/practicas.service';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent implements OnInit {

  public item;
  public ejercicio: any[]; 

  constructor(public _practicas: PracticasService, public _ruta: ActivatedRoute) { 
    this._ruta.params.subscribe(params => {
      console.log(params["id"]);
      this.ejercicio = this._practicas.Ejercicio(params['id']);
      this.item = this.ejercicio;
    });
    
  }

  ngOnInit(): void {
  }

}
