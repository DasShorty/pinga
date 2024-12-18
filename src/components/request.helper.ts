import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export type Response<T> = {
  body: T,
  status: number,
  statusText: string,
}

@Injectable({
  providedIn: 'root'
})
export class RequestHelper {

  _backendUrl = "http://localhost:8080";
  _httpHeaders = {
    Authorization: `Bearer token`
  }

  constructor(private httpClient: HttpClient) {
  }

  async get<T>(url: String): Promise<Response<T>> {
    return new Promise<Response<T>>((resolve, reject) => {
      this.httpClient.get<any>(this._backendUrl + url, {headers: this._httpHeaders})
        .subscribe({
          next: (response) => {
            return resolve(
              {
                body: response,
                status: 200,
                statusText: "OK"
              }
            )
          },
          error: (error) => {
            return reject(
              {
                body: null,
                status: error.status,
                statusText: error.statusText
              }
            )
          }
        });
    });
  }

}
