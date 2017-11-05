import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data/data.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

declare const Materialize : any;

export interface EmailData {
  email : string;
  firstName : string;
  lastName : string;
  subject : string;
  message : string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  emailData : EmailData;
  authSub : Subscription;

  constructor(private dataSrv : DataService, public authSrv : AuthService) {
    this.reset();
  }

  ngOnInit() {
    this.authSub = this.authSrv.authChanged.subscribe( () => {
      this.reset();
    });
  }

  ngOnDestroy() {
    if (this.authSub) this.authSub.unsubscribe();
  }

  ngAfterViewChecked() {
    if (Materialize.updateTextFields) {
      Materialize.updateTextFields();
    }
  }

  sendEmail() : void {
    this.dataSrv.sendEmail(this.emailData);
    this.reset();
  }

  reset() : void {
    let email=null, firstName=null, lastName=null;
    if (this.authSrv.user.isLoggedIn) {
      let user = this.authSrv.user;
      email = user.email;
      let name : string[] = this.authSrv.user.name.split(" ");
      firstName = name[0];
      if (name.length > 1) {
        lastName = name[1];
      }
    }
    this.emailData = {
      email : email,
      firstName : firstName,
      lastName : lastName,
      subject : null,
      message : null
    };
  }

  formIncomplete() {
    if (!this.verifyEmail(this.emailData.email)) return true;
    if (!this.emailData.firstName) return true;
    if (!this.emailData.lastName) return true;
    if (!this.emailData.subject) return true;
    if (!this.emailData.message) return true;
    return false;
  }

  verifyEmail(email : string) : boolean {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

}
