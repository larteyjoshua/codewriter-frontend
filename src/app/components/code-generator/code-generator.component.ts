import { Component } from '@angular/core';
import { RequestObject } from 'src/app/model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-code-generator',
  templateUrl: './code-generator.component.html',
  styleUrls: ['./code-generator.component.scss'],
})
export class CodeGeneratorComponent {
  prompt: string = '';
  response: string = '';
  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: string = '';
  constructor(private apiService: ApiService) {}

  codeGenerator() {
    if (this.prompt.length > 0) {
      const data: RequestObject = {
        'prompt': this.prompt,
      };
      console.log(data);
      this.apiService.generateCode(data).subscribe({
        next: (response) => {
          if (response.status === 200) {
            console.log(response);
          }
        },
        error: (error) => {
          {
            console.log(error);
            this.alertType = 'alert alert-danger alert-sm';
            this.showAlert = true;
            this.alertMessage = error.message;
            setTimeout(() => {
              this.showAlert = false;
            }, 4000);
          }
        },
      });
    } else {
      this.alertType = 'alert alert-danger alert-sm';
      this.showAlert = true;
      this.alertMessage = 'Input cannot be empty!';
      setTimeout(() => {
        this.showAlert = false;
      }, 4000);
    }
  }
}
