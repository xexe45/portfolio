import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {AboutComponent,PortafolioComponent,ItemComponent,SearchComponent} from './components/index.paginas';
import {app_routing} from './app.route';
import {InformacionService} from './services/informacion.service';
import {ProductosService} from './services/productos.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule
  ],
  providers: [InformacionService,
  ProductosService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
