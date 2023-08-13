import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  uploadCSV(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/uploads/upload`,
     formData, { responseType: 'text' });
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

}
