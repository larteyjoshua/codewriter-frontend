import { Component } from '@angular/core';
import { RequestObject } from 'src/app/model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-image-generator',
  templateUrl: './image-generator.component.html',
  styleUrls: ['./image-generator.component.scss']
})
export class ImageGeneratorComponent {
  prompt: string = '';
  response: string = '';
  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: string = '';
  imageURL:string = '';
  revised_prompt:string ='';
  constructor(private apiService: ApiService) {}

  imageGenerator() {
    if (this.prompt.length > 0) {
      const data: RequestObject = {
        'prompt': this.prompt,
      };
      console.log(data);
      this.apiService.generateImage(data).subscribe({
        next: (response) => {
          if (response.status === 200) {
            console.log(response);
            this.imageURL=response.body.image_url;
            this.revised_prompt=response.body.prompt;

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
