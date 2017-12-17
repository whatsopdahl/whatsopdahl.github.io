import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

import * as $ from 'jquery';

@Component({
  selector: 'whatsopdahl-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authSrv: AuthService) {}

  ngOnInit() {
    $(document).ready(() => {
      this.authSrv.load();
    });
  }
}
