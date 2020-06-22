import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { trigger, state, transition, style, animate } from '@angular/animations';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  animations:[
    trigger('navBarFade', [
      state('bottom', style({backgroundColor: '#343a40'})),
      state('top', style({backgroundColor: '#343a40'})),
      transition('bottom => top', [
        animate('2s')
      ]),
      transition('bottom => top', [
        animate('2s')
      ]),
    ])
  ],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})
export class TopBarComponent implements OnInit {
  screenHeight;
  isShown = false;
  constructor(
      @Inject(DOCUMENT) document,
      location: Location
  ) { }

  ngOnInit() {
    this.screenHeight = window.innerHeight;
    let element = document.getElementById('navbar');
    element.classList.add('bg-secondary');
  }

  // Sticky header on scroll down
   @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > this.screenHeight/2) {
       let element = document.getElementById('navbar');
       element.classList.remove('bg-secondary');
       element.classList.add('bg-primary','text-light');
       this.isShown = true;
     } else {
        this.isShown = false;
        let element = document.getElementById('navbar');
       element.classList.remove('bg-primary');
       element.classList.add('bg-secondary');
        //element.classList.add('d-none');
     }
  }

}
