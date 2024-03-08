import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  private readonly URL_DB_Admin = "https://travel-app-8glz.onrender.com/admin";

  login(data:{email:string,password:string}) {
    return this.http.post(`${this.URL_DB_Admin}/login`,data);
  }

// admin Data
  getAdminData(){
    return this.http.get(`${this.URL_DB_Admin}/adminData`);
  }

// countries
  createCountry(data:any){
    return this.http.post(`${this.URL_DB_Admin}/countries`,data);
  }
  updateCountry(id:Number,data:any){
    return this.http.put(`${this.URL_DB_Admin}/countries/${id}`,data);
  }
  deleteCountry(id:number){
    return this.http.delete(`${this.URL_DB_Admin}/countries/${id}`);
  }

// Hotels
  createHotel(data:any){
    return this.http.post(`${this.URL_DB_Admin}/hotels`,data);
  }
  updateHotel(id:Number,data:any){
    return this.http.put(`${this.URL_DB_Admin}/hotels/${id}`,data);
  }
  deleteHotel(id:number){
    return this.http.delete(`${this.URL_DB_Admin}/hotels/${id}`);
  }

// trips
  createTrip(data:any){
    return this.http.post(`${this.URL_DB_Admin}/trips`,data);
  }
  updateTrip(id:Number,data:any){
    return this.http.put(`${this.URL_DB_Admin}/trips/${id}`,data);
  }
  deleteTrip(id:number){
    return this.http.delete(`${this.URL_DB_Admin}/trips/${id}`);
  }

  // users
  setAdmin(id:string){
    return this.http.put(`${this.URL_DB_Admin}/setAdmin/${id}`,'');
  }
  deleteUser(id:string){
    return this.http.delete(`${this.URL_DB_Admin}/users/${id}`);
  }
  allUsers(){
    return this.http.get(`${this.URL_DB_Admin}/users`);
  }

}
