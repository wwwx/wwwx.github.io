import { animateChild, query, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    trigger('animate', [
      transition('* => *', [
        query(':enter, :leave', [animateChild()], {
          optional: true,
        }),
      ]),
    ]),
  ],
})
export class ProfileComponent implements OnInit {
  showNavigationMenu = false;

  constructor() {
  }

  ngOnInit() {
  }
}
