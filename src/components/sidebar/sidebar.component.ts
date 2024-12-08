import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ServiceService, ServiceStatus} from '../service/service.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: `sidebar.component.html`,
  imports: [
    NgOptimizedImage
  ],
  styleUrl: `sidebar.component.css`
})
export class SidebarComponent implements OnInit {

  protected statusMap = new Map<string, boolean>();

  ngOnInit(): void {
    setInterval(() => {
      this.serviceService.data.forEach(value => {
        this.isServiceUp(value.id).then(statusReport => {
          this.statusMap.set(value.id, statusReport);
        });
      });
    }, 1000);
  }

  constructor(protected serviceService: ServiceService) {
  }

  protected async isServiceUp(serviceId: string) {
    return this.serviceService.getLastStatusFromService(serviceId).then(value => {

      if (value.body === null) {
        return false;
      }

      return value.body.responseCode === 200;
    });
  }

}
