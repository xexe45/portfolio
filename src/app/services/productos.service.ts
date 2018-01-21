import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductosService {
  productos:any = [];
  cargando_productos = true;
  constructor(private http:HttpClient) {
    this.cargar_productos();
  }

  public cargar_productos(){
      //this.cargando_productos = true;
      this.http.get('https://heroesapp-1ab0c.firebaseio.com/productos_idx.json')
        .subscribe(res => {
          console.log(res);
          this.cargando_productos = false;
          console.log(this.cargando_productos);
          this.productos = res;

        });
  }

  public cargar_producto(codigo:string){
    return this.http.get(`https://heroesapp-1ab0c.firebaseio.com/productos/${codigo}.json`);

  }

}
