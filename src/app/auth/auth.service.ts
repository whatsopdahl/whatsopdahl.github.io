import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';

declare const gapi;

export interface User {
  name :string;
  email : string;
  isLoggedIn : boolean;
  imgUrl : string;
  id : string;
}

@Injectable()
export class AuthService {
  user : User;
  auth2 : any;
  authChanged : EventEmitter<null> = new EventEmitter<null>();

  constructor() {
    this.resetUser();
  }

  resetUser() : void {
    this.user = {
      name : null,
      email : null,
      isLoggedIn : false,
      imgUrl : null,
      id : null
    };
  }

  load() {
    gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id : environment.googleAuth.clientId,
          scope : 'profile email'
        });

        // Listen for sign-in state changes.
        this.auth2.isSignedIn.listen( (success) => {
          this.signInChanged(success);
        });

        // Listen for changes to current user.
        this.auth2.currentUser.listen( (googleUser) => {
          this.userChanged(googleUser);
        });

        // Sign in the user if they are currently signed in.
        if (this.auth2.isSignedIn.get() == true) {
          this.signIn();
        }

        // Start with the current live values.
        this.refreshValues();
    });
  }

  signInChanged(val : boolean) {
    this.user.isLoggedIn = val;
  }

  userChanged(googleUser : any) {
    this.updateUser(googleUser);
  }

  refreshValues() : void {
    if (this.auth2){
      console.log('Refreshing values...');

      let googleUser = this.auth2.currentUser.get();

      this.updateUser(googleUser);
    }
  }

  updateUser(googleUser : any) {
    if (googleUser && this.auth2.isSignedIn.get() === true) {
      let profile = googleUser.getBasicProfile();
      this.user.id = googleUser.getId();
      this.user.email = profile.getEmail();
      this.user.imgUrl = profile.getImageUrl();
      this.user.name = profile.getName();
      this.user.isLoggedIn = true;
    } else {
      this.resetUser();
    }
    this.authChanged.emit();
  }

  signOut() {
    this.auth2.signOut().then(() => {
      this.resetUser();
    });
  }

  signIn() {
    this.auth2.signIn();
  }
}
