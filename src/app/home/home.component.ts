import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../components/service/service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
  ],
  template: `
    <div>
      <h2>Home</h2>
    </div>
  `
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(protected serviceService: ServiceService) {
  }

}
