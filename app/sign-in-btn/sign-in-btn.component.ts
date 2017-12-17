import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sign-in-btn',
  templateUrl: './sign-in-btn.component.html',
  styleUrls: ['./sign-in-btn.component.css']
})
export class SignInBtnComponent {

  constructor(public authSrv : AuthService) { }

  changeLoginState() {
    if (this.authSrv.user.isLoggedIn) {
      this.authSrv.signOut();
    } else {
      this.authSrv.signIn();
    }
  }
}
