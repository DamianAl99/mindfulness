import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClimaServices {

  public uri: string;
  public apiKey: string = "e96d568a615a60b3d9b70f9e60574994";

  constructor(private http:HttpClient) { 
    this.uri = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=asuncion,py&appid=${this.apiKey}`
  };

  getClima(){
    return this.http.get(this.uri)
  };
}
