import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dp-logo',
  templateUrl: './dp-logo.component.html',
  styleUrls: ['./dp-logo.component.scss'],
})
export class DpLogoComponent implements OnInit {
  @Input() size = '14rem';
  @Input() borderWidth = '.5rem';

  constructor() {
  }

  ngOnInit() {
  }
}
