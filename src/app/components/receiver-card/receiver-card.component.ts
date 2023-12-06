import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-receiver-card',
  templateUrl: './receiver-card.component.html',
  styleUrls: ['./receiver-card.component.scss']
})
export class ReceiverCardComponent {
  @Input() response: string='';
  @Output() regenerate = new EventEmitter();

  constructor(private toastr: ToastrService) {}
  codeGenerator(){
    this.regenerate.emit();
  }

  onCopyToClipboard(){
    this.toastr.success('copy to clipboard');
  }

}
