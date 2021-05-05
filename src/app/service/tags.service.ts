import { Injectable } from "@angular/core";
import { tagData } from "../utils/tags.data";
import { Tag } from "../utils/tags.model";

@Injectable({
  providedIn: "root",
})
export class TagsService {
  tags: Tag[];

  constructor() {
    this.tags = tagData;
  }

  toggleSkillSelection(tagName: string) {
    const selectedNum = this.tags.filter((tag) => tag.isSelected).length;
    const currentTag = this.tags.find((tag) => tag.displayName === tagName);
    if (selectedNum <= 1 && currentTag.isSelected) return;
    currentTag.isSelected = !currentTag.isSelected;
  }
}
