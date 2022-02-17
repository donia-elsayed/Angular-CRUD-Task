import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel:{email:string,password:string} ={
    email:'',
    password:''
  }
  errorMessage:any;
  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit(): void {}

  submitLoginForm(loginForm:NgForm){
    this.authService.userLogin(loginForm.value).
    subscribe(data =>{
      if(data){
        localStorage.setItem("Token",data.token)
        this.route.navigate(['allUsers'])
      }
    },
    err =>{
      this.errorMessage = err.error.error
    }) 
  }
}
