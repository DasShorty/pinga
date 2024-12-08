import {Component, OnInit} from '@angular/core';
import {ServiceComponent} from '../../components/service/service.component';
import {ServiceService} from '../../components/service/service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ServiceComponent
  ],
  template: `
    <div>
      <h2>Home</h2>
      @for (service of serviceService.data; track service.id) {
        <service [service]="service"></service>
      }
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
      <h2>TEst</h2>
    </div>
  `
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(protected serviceService: ServiceService) {
  }

}
