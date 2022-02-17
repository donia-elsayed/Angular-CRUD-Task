import { AuthGuard } from './guards/auth.guard';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { LoginComponent } from './components/login/login.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
 
  {path:'',component:LoginComponent},
  {path:'allUsers',canActivate:[AuthGuard],component:UsersListComponent},
  {path:'allUsers/addUser',component: AddUserComponent },
  {path:'allUsers/singleUser/:id',canActivate:[AuthGuard],component:SingleUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
