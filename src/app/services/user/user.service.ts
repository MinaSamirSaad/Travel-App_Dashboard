import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type loginData = {
  email: string,
  password: string
}

type loginWithGoogleData = {
  name: string,
  email: string,
  googleId: string
  image: string
}



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private readonly URL_DB = "https://travel-app-8glz.onrender.com/users";

  login(data: loginData) {
    return this.http.post(`${this.URL_DB}/login`, data);
  }

  register(data: any) {
    return this.http.post(`${this.URL_DB}/register`, data);
  }

  userData() {
    return this.http.get(`${this.URL_DB}/userData`);
  }

  logout() {
    return this.http.post(`${this.URL_DB}/logout`, '');
  }

  loginWithGoogle(data: loginWithGoogleData) {
    return this.http.post(`${this.URL_DB}/loginGoogle`, data);
  }
}
