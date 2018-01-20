import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class InformacionService {
  info:any = {};
  cargada:boolean = false;
  cargadaSobre:boolean = false;
  equipo:any[] = [];

  constructor(private http:HttpClient) {
    this.cargaInfo();
    this.cargaSobreNosotros();

   }

   public cargaInfo(){
     this.http.get("assets/data/info.pagina.json")
       .subscribe((data) => {
         this.info = data;
         this.cargada = true;
       })
   }

   public cargaSobreNosotros(){
     this.http.get("https://heroesapp-1ab0c.firebaseio.com/equipo.json")
       .subscribe((data:any) => {
         console.log(data);
         this.cargadaSobre = true;
         this.equipo = data;
       })
   }

}
