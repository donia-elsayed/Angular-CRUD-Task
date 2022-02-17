import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  userLogin(userLoginValues:any):Observable<any>{
    return this.http.post('https://reqres.in/api/login',userLoginValues)
  }
  isLogin(){
    return !!localStorage.getItem("Token");
  }
}
