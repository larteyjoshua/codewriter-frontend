import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private toastr: ToastrService, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.helloWorld().subscribe({
      next: (response) => {
        if (response.status === 200) {
          const hello = response.body.data;
          this.toastr.success(hello);
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
}
