import { CommonModule } from '@angular/common';
import { EventEmitter,booleanAttribute, Component, input, Input, numberAttribute, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';




function formatName(val:string){
   return "Hii, " + val;
}


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  // name="Vipul"
  // status="single"
  // salary=40000
  // isButton = false
  // inputVal = "Vipul"

  // users =[
  //   {id:1,name:"Ramesh",isSingle:true,salary:42000},
  //   {id:2,name:"Suresh",isSingle:false,salary:40000},
  //   {id:3,name:"Jayesh",isSingle:true,salary:39000},
  //   {id:4,name:"Natesh",isSingle:false,salary:52000},
  //   {id:5,name:"Yogesh",isSingle:true,salary:40000}
  // ]
  // onChange(e:Event)
  // {
  //  // console.log((e?.target as HTMLInputElement).value);
  // //  Two Way Data Binding
  //  this.inputVal = (e. target as HTMLInputElement).value
  // }

  // Input Decorators
  // @Input({alias:"user-Name" , transform:formatName}) name = "";
  @Input({alias:"user-Name"}) name = "";
  @Input({transform:booleanAttribute}) isSingle!:boolean;
  @Input({transform:numberAttribute}) salary!:number

  // Output Decorators
  @Output() myEvent = new EventEmitter<{name:string , newSalary:number}>()

  sendData() {
    this.myEvent.emit({
      name:this.name,
      newSalary:250000
    })
    
  }
}

