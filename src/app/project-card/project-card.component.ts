import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../utils/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: Project;
  @Output() cardSelect = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onCardClick(project: Project) {
    this.cardSelect.emit({ project });
  }
}
