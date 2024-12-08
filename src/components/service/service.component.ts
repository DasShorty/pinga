import {Component, Input, OnInit} from '@angular/core';
import {Service, ServiceService} from './service.service';

@Component({
  selector: 'service',
  standalone: true,
  template: `
    <div [style.background-color]="service != undefined ? service.hexColor : '#24292E'">
      <p>{{service == undefined ? "empty" : service.serviceName}}</p>
    </div>`,
  styles: ``
})
export class ServiceComponent implements OnInit {

  @Input() service: Service | undefined

  constructor() {
  }

  ngOnInit(): void {

  }


}
