import { animate, keyframes, style, transition, trigger, } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Project } from '../utils/project.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate(
          '.3s ease-out',
          keyframes([
            style({ transform: 'translateX(0%)', offset: 0 }),
            style({ transform: 'translateX(100%)', offset: 1 }),
          ])
        ),
      ]),
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate(
          '.3s ease-out',
          keyframes([
            style({ transform: 'translateX(100%)', offset: 0 }),
            style({ transform: 'translateX(0%)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class ProjectDetailsComponent implements OnInit {
  @Output() cancellation = new EventEmitter();
  @Input() project: Project;

  constructor() {
  }

  ngOnInit() {
  }

  onCancellation() {
    this.cancellation.emit();
  }
}
