import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ServiceService, ServiceStatusEnum} from '../service/service.service';
import {AddServiceComponent} from '../addservice/addservice.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: `sidebar.component.html`,
  imports: [
    NgOptimizedImage,
    AddServiceComponent
  ],
  styleUrl: `sidebar.component.css`
})
export class SidebarComponent implements OnInit {

  protected statusMap = new Map<string, boolean>();

  ngOnInit(): void {
    setInterval(() => {
      this.takeRequest();
    }, 10000);
  }

  protected getStatus(serviceId: string): ServiceStatusEnum {
    if (!this.statusMap.has(serviceId)) {
      return ServiceStatusEnum.UNKNOWN;
    }

    if (this.statusMap.get(serviceId)) {
      return ServiceStatusEnum.UP;
    } else {
      return ServiceStatusEnum.DOWN;
    }
  }

  private takeRequest() {
    this.serviceService.data.forEach(value => {
      this.isServiceUp(value.id).then(statusReport => {
        this.statusMap.set(value.id, statusReport);
      });
    });
  }

  constructor(protected serviceService: ServiceService) {
  }

  protected async isServiceUp(serviceId: string) {
    return this.serviceService.getLastStatusFromService(serviceId).then(value => {

      if (value.body === null) {
        return false;
      }

      let body = value.body;

      return body.responseCode === body.service.expectedStatusCode;
    });
  }

  protected readonly ServiceStatusEnum = ServiceStatusEnum;

  openAddService() {
    console.log("Add service event emitted");
    this.serviceService.addService.emit(true);
  }
}
