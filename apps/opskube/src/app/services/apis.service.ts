import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../models/user';
import { order } from '../models/order';
import { book } from '../models/book';
@Injectable({
  providedIn: 'root'
})
export class ApisService {
  
  // api = "http://localhost:3000/apis";
  api = "https://opskube.herokuapp.com/apis"
  constructor(private http : HttpClient) { }

  newbook(data:book):Observable<any>{
    return this.http.post<any>(`${this.api}/newBook`,data);
  }

  newUser(data:user):Observable<any>{
    return this.http.post<any>(`${this.api}/newUser`,data);
  }

  newOrder(data:order):Observable<any>{
    return this.http.post<any>(`${this.api}/newOrder`,data);
  }

  getBook():Observable<any>{
    return this.http.get<any>(`${this.api}/allBooks`);
  }
  getOrders():Observable<any>{
    return this.http.get<any>(`${this.api}/allOrders`);
  }
  getUsers():Observable<any>{
    return this.http.get<any>(`${this.api}/allUser`);
  }

  login(data:{Name:string}):Observable<any>{
    return this.http.post<any>(`${this.api}/login`,data);
  }

  
}
