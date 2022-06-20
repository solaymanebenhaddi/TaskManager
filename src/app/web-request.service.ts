import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly UrlApi;
  constructor(private Http : HttpClient) { 
    this.UrlApi = 'http://localhost:3000';
  }
// this the Global function that call the service.
  Geter(url: string) {
    return this.Http.get(`${this.UrlApi}/${url}`);
  }
  Poster(url: string, body: any) {
    return this.Http.post(`${this.UrlApi}/${url}`, body);
  }
  Puter(url: string, body: any) {
    return this.Http.put(`${this.UrlApi}/${url}`, body);
  }
  Deleter(url: string) {
    return this.Http.delete(`${this.UrlApi}/${url}`);
  }
  // AuthenticationService :
  // this the Global function that call the service to signup.
  Subscribe(email: string, password: string) {
    return this.Http.post<HttpResponse<any>>(`${this.UrlApi}/users`, {
      email,
      password
    }, {
        observe: 'response'
      });
  }
  // this the Global function that call the service to signin.
  login(email: string, password: string) {
    return this.Http.post<HttpResponse<any>>(`${this.UrlApi}/users/login`, {
      email,
      password
    }, {
        observe: 'response'
      });
  }

  

}
