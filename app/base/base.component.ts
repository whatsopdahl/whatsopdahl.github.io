import { Component, OnInit, Input, ElementRef, HostListener, OnDestroy, Inject} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { ScrollService } from '../scroll.service/scroll.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit, OnDestroy{
  routeSub : Subscription;

  constructor(@Inject(DOCUMENT) private document : Document, private route : ActivatedRoute, private router : Router, private scrollSrv : ScrollService) {
  }

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe( (params : ParamMap ) => {
      let tag : string = "home";
      if (params.has("tag")) {
        tag = params.get("tag");
      }
      $(document).ready( () => {
        let elem = document.getElementById(tag);
        if (elem != null) this.scrollSrv.scrollTo(elem);
        else (this.router.navigateByUrl("/page-not-found"))
      });
    });
  }

  ngOnDestroy() {
    if (this.routeSub) this.routeSub.unsubscribe();
  }
}
