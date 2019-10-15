import { Component } from '@angular/core';

@Component({
  selector: 'ap',
 template:`
 <div [ngSwitch]="section">
 <div *ngSwitchCase="'D1150'">ABCD</div>
 <div *ngSwitchCase="'D1111'">abcdef</div>
 <div *ngSwitchDefault>Not Avaliable</div>
 </div>
 `
  
})
export class twbComponent {
  
  section='D11';
  
  }

