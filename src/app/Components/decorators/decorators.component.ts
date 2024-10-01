import { CurrencyPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';
import { CountryCodePipe } from '../../pipes/country-code.pipe';

@Component({
  selector: 'app-decorators',
  standalone: true,
  imports: [TitleCasePipe,UpperCasePipe,CurrencyPipe,CountryCodePipe],
  templateUrl: './decorators.component.html',
  styleUrl: './decorators.component.css'
})
export class DecoratorsComponent {
 
  phoneNumber : number = 1234567890;
  @Input() name = "";
  @Input({transform:numberAttribute})age!:number;
  @Input()gender=""
  @Input({transform:numberAttribute})salary!:number;
 
  @Output() myEvent2 = new EventEmitter<{newAge:number}>();
  sendData()
  {
    this.myEvent2.emit(
      {
        newAge:23
      }
      
   )
  }
}
