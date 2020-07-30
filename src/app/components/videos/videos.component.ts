import { Component, OnInit } from '@angular/core';
import { PracticasService } from "../../services/practicas.service";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  public videos: any[];

  constructor(private _practicas: PracticasService) {
    this.videos = this._practicas.getVideos();
  }

  ngOnInit(): void {
  }

}
