import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent {
  @Input() message:string = "";
  @Input() visible:boolean =false;
  @Input() type:string = "alert alert-warning alert-sm";

}
