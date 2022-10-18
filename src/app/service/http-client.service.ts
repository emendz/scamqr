import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IHttpClient } from './Ihttp-client';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService implements IHttpClient {
  private readonly url = environment.apiUrl;
  constructor(private _http: HttpClient) {}

  get<T>(route: string, options?: {}): Observable<any> {
    return this._http.get<T>(`${this.url}/${route}`, options);
  }
  getById<T>(route: string, id: number, options?: {}): Observable<any> {
    return this._http.get<T>(`${this.url}/${route}/${id}`, options);
  }
  post<T>(obj: object, route: string): Observable<any> {
    return this._http.post<T>(`${this.url}/${route}`, obj);
  }
  update<T>(id: number, obj: object, route: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  patch<T>(obj: any, route: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  delete<T>(id: number, route: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
