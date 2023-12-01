import { Component } from '@angular/core';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'codewriter';
  isLoading = this.spinnerService.getSpinnerState();;
  
  constructor(private spinnerService: SpinnerService) {}
  
}
