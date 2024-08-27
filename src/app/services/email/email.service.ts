import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  private apiUrl = `${environment.mail_api}/send-email`; // Your backend API URL

  constructor(private http: HttpClient) { }

  sendEmail(subject: string, html: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const body = {
      subject: subject,
      html: html,
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
