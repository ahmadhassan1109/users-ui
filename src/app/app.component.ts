import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  user?: Observable<any>;
  users?: Observable<any>;

  selectedFile: File | null = null;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadCSV(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.userService.uploadCSV(formData).subscribe(
        (response) => {
          alert('CSV uploaded successfully:'+ response);            
          this.users = this.userService.getUsers();
        },
        (error) => {
          alert('Error uploading CSV:'+ error);          
        }
      );
    }
  }

}
