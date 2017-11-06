/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
/* Components */
import { AppComponent } from './app/app.component';
import { BaseComponent } from './base/base.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { BioComponent } from './bio/bio.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TermsComponent } from './terms/terms.component';
import { PortfolioEntryComponent } from './portfolio-entry/portfolio-entry.component';
import { BioEventComponent } from './bio-event/bio-event.component';
import { ResumeComponent } from './resume/resume.component';
import { LowercasePipe } from './lowercase.pipe/lowercase.pipe';
/* Services */
import { DataService } from './data/data.service';
import { ScrollService } from './scroll.service/scroll.service';
import { AuthService } from './auth/auth.service';
import { SignInBtnComponent } from './sign-in-btn/sign-in-btn.component';
/* Routes */
const appRoutes = [
  { path : "blog", component : BlogComponent },
  { path : "terms", component : TermsComponent },
  { path : "_/:tag", component : BaseComponent, pathMatch: "full"},
  { path : "/", redirectTo : '_/home', pathMatch : "full"},
  { path : "whatsopdahl.com", redirectTo : '_/home', pathMatch : "full"},
  { path : "**", component : PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    NavigationComponent,
    LandingPageComponent,
    PortfolioComponent,
    BlogComponent,
    BioComponent,
    FooterComponent,
    ContactComponent,
    PageNotFoundComponent,
    TermsComponent,
    PortfolioEntryComponent,
    BioEventComponent,
    LowercasePipe,
    ResumeComponent,
    SignInBtnComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot( appRoutes, { enableTracing: true } )
  ],
  providers: [DataService, ScrollService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
