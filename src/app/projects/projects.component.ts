import {
  animate,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { TagsService } from "../service/tags.service";
import { tagData } from "../utils/tags.data";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
  animations: [
    trigger("slideIn", [
      transition("* => *", [
        query(":enter", style({ transform: "translateY(-25%)", opacity: 0 }), {
          optional: true,
        }),
        query(":leave", style({ transform: "translateY(0%)", opacity: 1 }), {
          optional: true,
        }),
        query(
          ":enter",
          [
            stagger("0.05s", [
              animate(
                "0.2s ease-out",
                keyframes([
                  style({
                    transform: "translateY(-25%)",
                    opacity: 0,
                    offset: 0,
                  }),
                  style({ transform: "translateY(0%)", opacity: 1, offset: 1 }),
                ])
              ),
            ]),
          ],
          { optional: true }
        ),
        query(
          ":leave",
          [
            stagger("0.05s", [
              animate(
                "0.2s ease-in",
                keyframes([
                  style({ transform: "translateY(0%)", offset: 0 }),
                  style({
                    transform: "translateY(-25%)",
                    opacity: 0,
                    offset: 1,
                  }),
                ])
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  projects = [];
  constructor(private tagsService: TagsService) {}

  randomNum = 0;

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
    this.projects = tagData.filter((p) => {
      return p.isSelected;
    });
  }
}
