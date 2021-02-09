import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor(private data: DataService) {}

  ngOnInit(): void {}

  getSkills() {
    return this.data
      .technologies()
      .pipe(
        map((techs) =>
          techs.sort((a, b) => b.experienceInYears - a.experienceInYears)
        )
      );
  }
}
