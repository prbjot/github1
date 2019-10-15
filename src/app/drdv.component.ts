import { Component } from '@angular/core';

@Component({
  selector: 'gp',
 template:`
 <div *ngIf="arr.length > 0">
array has {{arr.length}} elements

<ul>
  <li *ngFor="array is:">
    {{arr}}
  </li>
</ul>


</div>
<div *ngIf="arr.length==0">
array is empty
</div>
 
 `  
})
export class drdvComponent {
  
  arr=['1','2','3'];
}
