import { Component, Input, HostListener, Inject, ElementRef, ViewChild} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { trigger, transition, animate, state, style } from '@angular/animations';
import { BioEvent } from '../bio/bio.event';

@Component({
  selector: 'bio-event',
  templateUrl: './bio-event.component.html',
  styleUrls: ['./bio-event.component.css'],
  animations : [
    trigger("showMe", [
      state("true", style({
        opacity : 1
      })),
      state("false", style({
        opacity : 0
      })),
      transition("0 => 1", animate("1s ease-in-out")),
      transition("1 => 0", animate("1s ease-in-out"))
    ])
  ]
})
export class BioEventComponent {
  @ViewChild('root') rootElem : ElementRef;
  @Input('evt') evt : BioEvent;
  @Input('odd') odd : boolean;
  show : boolean = false;
  targetOffset : number;

  @HostListener('window:scroll') onScroll() {
    if (this.document.documentElement.scrollTop >= this.targetOffset) {
      this.show = true;
    }
  }

  constructor(@Inject(DOCUMENT) private document : Document) {}

  ngAfterViewInit() : void {
    let nativeElem = this.rootElem.nativeElement;
    this.targetOffset = nativeElem.offsetTop;
  }
}
