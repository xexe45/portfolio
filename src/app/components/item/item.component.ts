import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {
  idproducto:string = undefined;
  producto:any = undefined;

  constructor(  private route:ActivatedRoute,
                private service:ProductosService) {

    route.params.subscribe(parametros => {
      this.idproducto = parametros['id'];
    });

    this.service.cargar_producto(this.idproducto)
      .subscribe(data => {
        this.producto = data;
      })

  }

  ngOnInit() {
  }

}
