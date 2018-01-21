import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductosService {
  productos:any[] = [];
  cargando_productos = true;
  productos_filtrados:any[] = [];
  constructor(private http:HttpClient) {
    this.cargar_productos();
  }

  public cargar_productos(){
      //this.cargando_productos = true;
      let promesa = new Promise((resolve,reject) => {
        this.http.get('https://heroesapp-1ab0c.firebaseio.com/productos_idx.json')
          .subscribe((res:any[]) => {
            
            this.cargando_productos = false;

            this.productos = res;
            resolve();
          });
      });

      return promesa;

  }

  public cargar_producto(codigo:string){
    return this.http.get(`https://heroesapp-1ab0c.firebaseio.com/productos/${codigo}.json`);

  }

  public buscarProducto(termino:string){

    if(this.productos.length == 0){
      this.cargar_productos().then(() => {
        //termino la carga
        this.filtrarProductos(termino);
      });
    }else{
      this.filtrarProductos(termino);
    }

  }

  private filtrarProductos(termino:string){
    this.productos_filtrados = [];
    termino = termino.toLowerCase();
    this.productos.forEach(prod => {
      if(prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0){
        this.productos_filtrados.push(prod);

      }
    })


  }

}
