import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class InformacionService {
  info:any = {};
  cargada:boolean = false;
  constructor(private http:HttpClient) {

    this.http.get("assets/data/info.pagina.json")
      .subscribe((data) => {
        this.info = data;
        this.cargada = true;
        console.log(data);
      })
   }

}
