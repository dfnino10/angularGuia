import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Observable, of } from 'rxjs';
import { Email } from 'src/app/models/email.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  sendNewMessage(name: string, email: string, message: string) : void {

    const emailObject: Email = {
      name: name,
      email: email,
      message: message
    };
    const emailString = JSON.stringify(emailObject);

    this.httpClient.post( URL_SERVICIOS + '/guia/sendEmail/', emailString, httpOptions).subscribe((data) => {
      console.log(data);
    });

  }
}