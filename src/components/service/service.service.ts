import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {RequestHelper} from '../request.helper';

export type Service = {
  id: string,
  serviceName: string,
  shortName: string,
  hexColor: string,
  requestUri: string,
  expectedStatusCode: number
}

export type ServiceStatus = {
  service: Service,
  id: string,
  date: Date,
  responseCode: number,
  responseMessage: string
}

export enum ServiceStatusEnum {
  UP,
  DOWN,
  UNKNOWN
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService extends BehaviorSubject<Service[]> {

  private _data: Service[] = [];
  private _addService = new EventEmitter<boolean>(false);

  constructor(private requestHelper: RequestHelper) {
    super([]);
    this.getServices();
  }

  get data() {
    return this._data;
  }

  get addService(): EventEmitter<boolean> {
    return this._addService;
  }

  getServices() {
    this.requestHelper.get<Service[]>("/service").then(value => {

      if (value.body === null) {
        return;
      }

      this._data = value.body;
      this.next(this._data);
    })
  }

  async getLastStatusFromService(id: string) {
    return this.requestHelper.get<ServiceStatus>(`/status/${id}`);
  }

}
