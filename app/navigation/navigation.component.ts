import { Component, OnInit, OnDestroy, Inject, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../scroll.service/scroll.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';
import * as $ from 'jquery';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  hoverLogo : boolean = false;
  pagePosSub : Subscription;
  currComponent : string = 'home';
  logoUrl : string = `${environment.urlPrefix}assets/logos/whatsOpdahlLogo.png`;
  hoverLogoUrl : string = `${environment.urlPrefix}assets/logos/whatsOpdahlLogo-hover.png`;

  @HostListener('window:scroll') onWinScroll() {
    this.scrollSrv.throttleScroll();
  }

  constructor(private scrollSrv : ScrollService, private router : Router) { }


}
