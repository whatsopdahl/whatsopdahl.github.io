import { Injectable, HostListener, EventEmitter, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as $ from 'jquery';

@Injectable()
export class ScrollService {
  posChanged : EventEmitter<number> = new EventEmitter<number>();
  throttleTimeoutInMs : number = 50;
  throttling : boolean = false;

  constructor(@Inject(DOCUMENT) private document : Document) {}

  throttleScroll() : void {
    if (!this.throttling) {
      this.throttling = true;
      setTimeout( () => {
        this.posChanged.emit(this.document.documentElement.scrollTop);
        this.throttling = false;
      }, this.throttleTimeoutInMs);
    }
  }

  scrollTo(elem : HTMLElement) {
    $('window,html,body').stop();
    let top = $(elem).offset().top;
    top -= $("#main-nav").height();
    let duration = Math.abs(window.scrollY - top);
    $('window,html,body').animate({
      scrollTop : top
    }, duration);
  }
}
