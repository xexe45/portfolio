import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  termino:string = undefined;

  constructor(private route:ActivatedRoute,
              public _prd:ProductosService) {

    route.params.subscribe(parametros => {
      this.termino = parametros['termino'];
      this._prd.buscarProducto(this.termino);
    })
  }

  ngOnInit() {
  }

}
