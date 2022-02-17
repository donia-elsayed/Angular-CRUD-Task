import { Component, OnInit } from '@angular/core';
import { UsersListService } from '../../services/users-list.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  singleUser:any
  constructor(private activeRoute:ActivatedRoute,private usersService:UsersListService,private route:Router) {}
  ngOnInit(): void {
    this.getUserData();
  }
  // Get the data of a single user 
  getUserData(){
    this.activeRoute.params.subscribe(params => {
      this.usersService.getSingleUser(params.id).subscribe(users => {
          this.singleUser = users.data
        },
        (error) =>{
          console.log(error)
        })
    })
  }
  
  backToAllUsersPage(){
   this.route.navigate(['allUsers'])
  }
}
