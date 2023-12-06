import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sender-card',
  templateUrl: './sender-card.component.html',
  styleUrls: ['./sender-card.component.scss']
})
export class SenderCardComponent {
  @Input() prompt: string='';

}
