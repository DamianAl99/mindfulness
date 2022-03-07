import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mindfulnessV2';

  public status: boolean;

  constructor(){
    this.status = false;
  }

  iconBtn(){
    if(this.status==false){
      this.status = true;
    }else{
      this.status = false;
    }
  }
}
