import { Component, OnInit } from '@angular/core';
import {InformacionService} from '../../services/informacion.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  constructor(private _service:InformacionService) { }

  ngOnInit() {
  }

}
