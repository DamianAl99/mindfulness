import { Component, OnInit } from '@angular/core';
import { ClimaServices } from '../../services/clima.service';
//https://api.jikan.moe/v3/anime/1
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ClimaServices]
})
export class HomeComponent implements OnInit {

  public statusInfo: boolean;
  public clima: any;
  public temperatura: number;
  public meditacion: string;
  public sensacion: string;

  constructor(private _clima: ClimaServices) { 
    this.statusInfo = false,
    this.clima = "",
    this.meditacion = "",
    this.sensacion = "",
    this.temperatura = 0
  }

  ngOnInit(): void {
    this._clima.getClima().subscribe(
      res => {
        this.clima = res;/*es el objeto entero any*/
        this.temperatura = this.clima.main.temp;/*es la temperatura, nos devuelve un number*/
        
        if(this.temperatura >= 25 && this.temperatura < 40){
          this.meditacion = "el Zen";
          this.sensacion = "para el Calor";
          
        }else if(this.temperatura >= 18 && this.temperatura < 25){
          this.meditacion = "el Enfoque";
          this.sensacion = "ya que el Clima está Agradable";
         
        }else if(this.temperatura >= 0 && this.temperatura < 18){
          this.meditacion = "la Meditación";
          this.sensacion = "ya que hace Frio";
      
        }
      },
      err => console.log(<any>err)
    );

  }

  info(){
    if(this.statusInfo == false){
      this.statusInfo = true;
    }else{
      this.statusInfo = false;
    }
  }

}
