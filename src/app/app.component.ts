import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';
import { DecoratorsComponent } from './Components/decorators/decorators.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent, CommonModule,DecoratorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mini-Project';
  users =[
    {id:1,name:"Ramesh",isSingle:true,salary:42000},
    {id:2,name:"Suresh",isSingle:false,salary:40000},
    {id:3,name:"Jayesh",isSingle:true,salary:39000},
    {id:4,name:"Natesh",isSingle:false,salary:52000},
    {id:5,name:"Yogesh",isSingle:true,salary:40000}
  ]


  user = {
    name:"vipul tapare",
    age:22,
    gender:"Male",
    salary:40000
  }

 

  

  receivedData(val:User)
  {
     
    console.log(val)
    const idx =  this.users.findIndex(user => user.name == val.name)
    this.users[idx].salary = val.newSalary;

  }

  receivedData2(val)
  {
    this.user.age = val.newAge;
  }
}
