import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LandingComponent } from './landing/landing.component';
import { CardSummaryComponent } from './card-summary/card-summary.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
    ]) ],
  declarations: [ AppComponent, TopBarComponent, LandingComponent, CardSummaryComponent, HomePageComponent,  ],
  bootstrap:    [ AppComponent ],
  providers: [],
})
export class AppModule { }
