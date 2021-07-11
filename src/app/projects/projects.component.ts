import { animateChild, query, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { slideInAnimation2 } from '.././animations';
import { ProjectsService } from '../service/projects.service';
import { TagsService } from '../service/tags.service';
import { Project } from '../utils/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    slideInAnimation2,
    trigger('animateChildren', [
      transition('* => *', [
        query('@*, :enter', [animateChild()], { optional: true }),
        query('@*, :leave', [animateChild()], { optional: true }),
      ]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  projects = [];
  selectedProject!: Project;

  constructor(
    private tagsService: TagsService,
    private projectService: ProjectsService
  ) {
  }

  ngOnInit() {
    this.renderProjects();
    this.tagsService.onTagUpdate.subscribe((value) => {
      if (this.projects.length === 0) {
        this.renderProjects();
      } else {
        this.projects = [];
      }
    });
  }

  renderProjects() {
    this.projects = this.projectService.getProjects().filter((project) => {
      return this.tagsService.tags
        .filter((tag) => tag.isSelected)
        .reduce(
          (prev, tag) =>
            prev || project.tags.indexOf(tag.displayName.toLowerCase()) > -1,
          false
        );
    });
  }

  onProjectCardClick(data) {
    this.selectedProject = data.project;
  }
}
