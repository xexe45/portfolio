import { Component, OnInit } from '@angular/core';
import {InformacionService} from '../../services/informacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  public year:number;
  constructor(public _service:InformacionService) {
    this.year = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
