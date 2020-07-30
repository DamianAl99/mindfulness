import { Component, OnInit } from '@angular/core';
import { PracticasService} from '../../services/practicas.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productos: any[];

  constructor(private _producto: PracticasService) {
    this.productos = this._producto.getProductos();
  }

  ngOnInit(): void {
  }

}
