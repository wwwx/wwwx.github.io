import { Injectable } from "@angular/core";
import { ALL_PROJECT_DATA } from "../utils/project-data";

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  constructor() {}

  getProjects() {
    return ALL_PROJECT_DATA;
  }
}
