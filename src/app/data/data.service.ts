import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EmailData } from '../contact/contact.component';

@Injectable()
export class DataService {

  constructor(private http : HttpClient) { }

  sendEmail(data : EmailData) : void {
    this.http.post(environment.serverUrl+"email", data).subscribe( (resp) => {
      console.log("Email sent");
    });
  }
}
