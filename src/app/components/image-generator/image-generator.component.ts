import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModelList, QualityList, RequestObject, SizeList } from 'src/app/model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-image-generator',
  templateUrl: './image-generator.component.html',
  styleUrls: ['./image-generator.component.scss'],
})
export class ImageGeneratorComponent {
  prompt: string = '';
  response: string = '';
  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: string = '';
  imageURL: string = '';
  revised_prompt: string = '';
  modelList: ModelList[] = [
    { label: 'Dalle-3', model: 'dall-e-3' },
    { label: 'Dalle-2', model: 'dall-e-2' },
  ];
  qualityList: QualityList[] = [
    { label: 'Standard', quality: 'standard' },
    { label: 'hd', quality: 'hd' },
  ];
  sizeList: SizeList[] = [
    { label: '1024x1024', size: '1024x1024' },
    { label: '1024x1792', size: '1024x1792' },
    { label: '1792x1024', size: '1792x1024' },
  ];
  quality: string = 'standard';
  model: string = 'dall-e-3';
  size = '1024x1024';
  n = 1;

  modelError: string = '';
  qualityError: string = '';
  sizeError: string = '';
  nError: string = '';


  constructor(private apiService: ApiService,
    private toastr: ToastrService) {}

  rangeChange(event: any) {
    console.log(event.target.value);
    this.n = event.target.value;
  }

  imageGenerator() {

    if (this.prompt.length > 0) {
      const data: RequestObject = {
        model: this.model,
        prompt: this.prompt,
        quality:this.quality,
        size:this.size,
        n:this.n
      };
      if (this.model ==='dall-e-3' && this.n>1){
        this.toastr.error('Dalle-3 can only generate one image at a time!', 'Error!');
        return
      }

      if (this.model ==='dall-e-2' && this.size !=='1024x1024'){
        this.toastr.error('"Dalle-2 can only generate 1024x1024 images!', 'Error!');
        return
      }
      this.apiService.generateImage(data).subscribe({
        next: (response) => {
          if (response.status === 200) {
            console.log(response);
            this.imageURL = response.body.image_url;
            this.revised_prompt = response.body.prompt;
          }
        },
        error: (error) => {
          {
            console.log(error);
            this.toastr.error(error.error.detail, 'Error!');
          
          }
        },
      });
    } else {
      this.toastr.error('Input cannot be empty!', 'Error!');
    }
  }
}
