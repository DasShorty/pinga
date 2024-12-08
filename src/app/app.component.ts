import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgForOf} from '@angular/common';
import {SidebarComponent} from '../components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <app-sidebar>
      <router-outlet></router-outlet>
    </app-sidebar>
  `
})
export class AppComponent {

}
