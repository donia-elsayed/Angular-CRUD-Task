import { UsersListService } from '../../services/users-list.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList:any[] = [];
  isUpdated:boolean = false;
  isDeleted:boolean = false;
 
  updateUserForm:FormGroup = new FormGroup({
    'first_name':new FormControl(null,[Validators.required]),
    'last_name':new FormControl(null,[Validators.required]),
    'email':new FormControl(null,[Validators.required]),
     'id':new FormControl()
  })
  constructor(private usersService:UsersListService) { }
  
  ngOnInit(): void {
    this.getAllUsers();
  }
  // Get all the users data 
  getAllUsers(){
    this.usersService.getUsersList().subscribe(
      users => {
        this.usersList = users.data
      }),
      (error:any) =>{
       console.log(error)
      }
  }
  
 // Get the data of single use that needed to update 
  getUserData(id:any){
    this.usersService.getSingleUser(id).subscribe(res=>{
      this.updateUserForm.patchValue(res.data);
    }) 
  }

  // Update the data of the needed user to be update 
  submitUpdateUser(){ 
    let data = this.updateUserForm.value;
    this.usersService.updateUser(data.id,data).subscribe(response=>{
      this.usersList.forEach((ele)=> {
        if(ele.id == data.id){
          ele.first_name = response.first_name;
          ele.last_name = response.last_name;
          ele.email= response.email;
        }
        this.isUpdated = true;
      });
    },
    error=>{
      console.log(error)
    })
  }

  deleteUser(user:any){
    this.usersService.deleteUser(user.id).subscribe(()=>{
      this.usersList = this.usersList.filter(item => { return item.id !== user.id})
      this.isDeleted = true;
    },
    error =>{
      console.log(error)
    })
  }
  changeList(event:any){
    this.usersList.push(event);
  }
  
}
