import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { SessionCodeService } from 'src/app/services/session-code.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  modalOpen = false;  
  code = '';
  constructor(private toastr: ToastrService, private apiService: ApiService,
    private sessionCodeService: SessionCodeService) {}

  ngOnInit(): void {
    this.apiService.helloWorld().subscribe({
      next: (response) => {
        if (response.status === 200) {
          const hello = response.body.data;
          this.toastr.success(hello);
          this.modalOpen = true;
        }
      },
      error: (error) => {
        {
          console.log(error);
          this.toastr.error(error.message, 'Error');
        }
      },
    });
  }

  onSubmitCode() {
    this.sessionCodeService.setCode(this.code); 
    this.modalOpen = false;
  }
}
