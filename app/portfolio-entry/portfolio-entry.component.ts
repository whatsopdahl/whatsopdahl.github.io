import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'portfolio-entry',
  templateUrl: './portfolio-entry.component.html',
  styleUrls: ['./portfolio-entry.component.css']
})
export class PortfolioEntryComponent implements OnInit {
  @Input('link') link : string;
  @Input('title') title : string;
  @Input('created') created : string;
  @Input('abstract') abstract : string;
  @Input('platform') platform : string;
  @Input('langs') langs : string[];
  @Input('wip') wip : boolean = false;
  @Input('icon') icon : {'class' : string, 'value' : string};

  constructor() { }

  ngOnInit() {
  }

}
