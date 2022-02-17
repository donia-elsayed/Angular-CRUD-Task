import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersListService {
  baseUrl:any = 'https://reqres.in/api/users';
  constructor(private http:HttpClient) {}

  getUsersList():Observable<any>{
    return this.http.get(this.baseUrl,{ params:{page:2} });
  }
  getSingleUser(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  AddNewUser(data:any):Observable<any>{
    return this.http.post(this.baseUrl,data)
  }
  updateUser(id:any,data:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,data)
  }
  deleteUser(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
