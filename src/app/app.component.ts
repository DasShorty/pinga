import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  template: `
  <div>
    <div *ngFor="let service of services">

      <h2>{{service.serviceName}}</h2>
      <p>{{service.shortName}}</p>
      <p>{{service.requestUri}}</p>

      <hr>

    </div>
  </div>
  `
})
export class AppComponent {
  title = 'pinga';

  services: any = null;

  constructor(private httpClient: HttpClient) {

    const headers = new HttpHeaders({
      Authorization: `Bearer hello`,
      Accept: '*'
    })

    httpClient.get("http://localhost:8080/service", {
      headers
    })
      .subscribe(response => {
        this.services = response;
        console.log(response);
      })

  }

}
