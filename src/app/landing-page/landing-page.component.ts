import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  headshotUrl : string;
  constructor() {
    this.headshotUrl = `../../${environment.urlPrefix}assets/headshot.png`;
   }

  ngOnInit() {
  }

}
