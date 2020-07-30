import { Component, OnInit } from '@angular/core';
import { PracticasService } from '../../services/practicas.service';
 
@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  public ejercicios: any[];

  constructor(public _practicas: PracticasService) {
    this.ejercicios = this._practicas.getEjercicios();
  };

  ngOnInit(): void {

  }

}
