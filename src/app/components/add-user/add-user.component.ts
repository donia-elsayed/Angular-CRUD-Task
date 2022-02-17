import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { UsersListService } from '../../services/users-list.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  isAdded:boolean = false;
  @Output() newUsersList = new EventEmitter<[any]>();
  
  addUserForm:FormGroup = new FormGroup({
    // 'name':new FormControl(null,[Validators.required]),
    // 'job':new FormControl(null,[Validators.required])
    'first_name':new FormControl(null,[Validators.required]),
    'last_name':new FormControl(null,[Validators.required]),
    'email':new FormControl(null,[Validators.required]),
  });
  constructor(private usersService:UsersListService) { }
  ngOnInit(): void { }
  
  // Function to submit the user data 
  submitAddUser(addUserForm:any){
    this.usersService.AddNewUser(addUserForm.value).subscribe(user=>{
      this.newUsersList.emit(user)
      this.isAdded = true;
      addUserForm.reset(); 
    },error=>{
      console.log(error)
    })
  }

}
