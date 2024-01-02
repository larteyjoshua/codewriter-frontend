import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  CodeRequestObject,
  LanguageList,
  MessageList,
  ModelList,
} from 'src/app/model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-code-generator',
  templateUrl: './code-generator.component.html',
  styleUrls: ['./code-generator.component.scss'],
})
export class CodeGeneratorComponent implements OnInit {
  prompt: string = '';
  message: MessageList[] = [];
  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: string = '';
  initialChat: MessageList = {
    role: 'system',
    content: 'You are a helpful assistant.',
  };

  modelList: ModelList[] = [
    { label: 'gpt-4', model: 'gpt-4' },
    { label: 'gpt-3.5-turbo', model: 'gpt-3.5-turbo' },
    { label: 'gpt-4 turbo', model: 'gpt-4 turbo' },
    { label: 'gpt-3.5-turbo-16k', model: 'gpt-3.5-turbo-16k' },
  ];
  temperature: number = 0.1;
  language = '';
  model: string = 'gpt-4';

  languageList: LanguageList[] = [
    { label: 'None', language: '' },
    { label: 'Python', language: 'python' },
    { label: 'typescript', language: 'typescripts' },
    { label: 'JavaScript', language: 'javascript' },
  ];

  constructor(private apiService: ApiService, private toastr: ToastrService) {}
  ngOnInit(): void {
    this.message.push(this.initialChat);
  }

  rangeChange(event: any) {
    console.log(event.target.value);
    this.temperature = event.target.value;
  }
  codeGenerator() {
    if (this.prompt.length > 0) {
      this.message.push({
        role: 'user',
        content: this.prompt + ' ' + this.language,
      });
      const data: CodeRequestObject = {
        message: this.message,
        temperature: this.temperature,
        model: this.model,
      };
      this.apiService.generateCode(data).subscribe({
        next: (response) => {
          if (response.status === 200) {
            this.message.push({ role: 'assistant', content: response.body });
          }
        },
        error: (error) => {
          {
            this.message.pop();
            console.log(error);
            this.toastr.error(error.error.detail, 'Error');
          }
        },
      });
    } else {
      this.toastr.error('Input cannot be empty!', 'Error');
    }
  }
  onNewChat() {
    this.message = [];
    this.message.push(this.initialChat);
  }
}
