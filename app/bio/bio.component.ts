import { Component, OnInit, HostListener } from '@angular/core';
import { BioEvent } from './bio.event';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent {
  events : BioEvent[];

  constructor() {
    let originEvt : BioEvent = { title : 'Origins',
                         imgSrc : `../../${environment.urlPrefix}assets/bio/SW_anchor.jpeg`,
                         desc : this.createOriginDesc()};
    let undergradEvent : BioEvent = { title : 'Undergrad',
                            imgSrc : `../../${environment.urlPrefix}assets/bio/norse_helmet.jpg`,
                            desc : this.createUndergradDesc()};
    let IbmEvent : BioEvent = { title : 'IBM',
                            imgSrc : `../../${environment.urlPrefix}assets/bio/IBM_logo_transparent.png`,
                            desc : this.createIBMDesc()};
    let IseEvent : BioEvent= { title : 'ISE',
                      imgSrc : `../../${environment.urlPrefix}assets/bio/ISE_logo.png`,
                      desc : this.createISEDesc()};
    this.events = [originEvt, undergradEvent, IbmEvent, IseEvent];
  }

  /**
   * Generates the description for the origin bio event
   */
  createOriginDesc() : string {
    return "I grew up in Minneapolis, MN with an older sister, two younger "
      +"brothers and a younger sister. I attended Minneapolis "
      +"Southwest High School, where I dabbled in a few sports, notably cross-country "
      +"and baseball, where I served as captain my senior year. I finished my high school education in 2013, "
      +"graduating as Valedictorian, Male Athlete of the Year, and with an International "
      +"Baccalaureate Diploma.";
  }

  /**
   * Generates the description for the undergrad bio event
   */
  createUndergradDesc() : string {
    return "After high school, I decided to go to Luther College for my undergrad. "
      +"Here, I met many good friends and my now fiancé, Jenna, as well as had some unforgettable "
      +"experiences. I played baseball for the Norse playing a part of the winningest team in school history and winning the 2016 "
      +"Iowa Intercollegiate Athletic Conference Tournament. I was also a member of Pi Mu Epsilon and "
      +"Phi Beta Kappa. In May 2017, I graduated Suma Cum Laude with a Bachelor's in Computer Science and Mathematics."
  }

  /**
   * Generates the description for the IBM bio event
   */
  createIBMDesc() : string {
    return "The summer after my Sophomore year, I began working for IBM Cloud on the "
      +"Managed Services product. After spending the summer of 2015 as a full-time intern, "
      +"I was fortunate enough to stay on part-time throughout the school year. The next summer, "
      +"I went back for a second internship and continued work throughout my senior year. During "
      +"this time, I acted as a full-stack developer for an internal web-application that facilitated "
      +"the population of a critical datbase. I also helped with managing this database by writing "
      +"bash scripts to increase automation.";
  }

  /**
   * Generates the description for the ISE bio event
   */
  createISEDesc() : string {
    return "After graduation in May 2017, I decided to search for other opportunities "
      +"outside of IBM to be closer to my now fiancé, Jenna, who is pursuing a Doctorate of "
      +"Physical Therapy at the University of Iowa. I was fortunate enough to find "
      +"work as a software engineer at Innovative Software Engineering (ISE), where I am currently working.";
  }
}
