import { Component, OnInit } from '@angular/core';
import { TagsService } from '../service/tags.service';
import { Tag } from '../utils/tags.model';

@Component({
  selector: 'app-key-skill-btns',
  templateUrl: './key-skill-btns.component.html',
  styleUrls: ['./key-skill-btns.component.scss'],
})
export class KeySkillBtnsComponent implements OnInit {
  keySkills: Tag[] = [];

  constructor(private tagsService: TagsService) {
    this.keySkills = this.tagsService.tags;
  }

  ngOnInit() {
  }

  onKeySkillBtnClick(tagName: string) {
    this.tagsService.toggleSkillSelection(tagName);
  }

  disableIfOneBtn(tag: Tag) {
    const targetKeySkills = this.keySkills.filter((k) => k.isSelected);
    return (
      targetKeySkills.length === 1 &&
      targetKeySkills[0].displayName === tag.displayName
    );
  }
}
