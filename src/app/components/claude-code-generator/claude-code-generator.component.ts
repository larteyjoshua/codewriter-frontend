import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  MessageList,
  ModelList,
  LanguageList,
  CodeRequestObjectClaude,
} from 'src/app/model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-claude-code-generator',
  templateUrl: './claude-code-generator.component.html',
  styleUrls: ['./claude-code-generator.component.scss'],
})
export class ClaudeCodeGeneratorComponent {
  prompt: string = '';
  message: MessageList[] = [];
  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: string = '';

  modelList: ModelList[] = [
    {
      label: 'anthropic.claude-instant-v1',
      model: 'anthropic.claude-instant-v1',
    },
    { label: 'anthropic.claude-v2:1', model: 'anthropic.claude-v2:1' },
    { label: 'anthropic.claude-v1', model: 'anthropic.claude-v1' },
  ];

  temperature: number = 0.9;
  language = '';
  model: string = 'anthropic.claude-instant-v1';

  languageList: LanguageList[] = [
    { label: 'None', language: '' },
    { label: 'Python', language: 'python' },
    { label: 'typescript', language: 'typescripts' },
    { label: 'JavaScript', language: 'javascript' },
  ];

  autoHeight: number = 40;
  constructor(private apiService: ApiService, private toastr: ToastrService) {}
  ngOnInit(): void {}

  adjustInputHeight(): void {
    const textArea = document.querySelector('textarea');
    textArea!.style.height = 'auto';
    textArea!.style.height = `${textArea?.scrollHeight}px`;
    this.autoHeight = textArea?.scrollHeight!;
  }

  rangeChange(event: any) {
    console.log(event.target.value);
    this.temperature = event.target.value;
  }
  codeGenerator() {
    if (this.prompt.length > 0) {
      const content = this.prompt + ' ' + this.language;
      this.message.push({
        role: 'user',
        content: content,
      });
      const data: CodeRequestObjectClaude = {
        prompt: content,
        temperature: this.temperature,
        model: this.model,
      };
      this.apiService.generateCodeFromClaude(data).subscribe({
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
  }
}
