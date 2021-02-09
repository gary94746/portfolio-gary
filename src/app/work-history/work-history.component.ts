import { Component, OnInit } from '@angular/core';
import { ContactMeService } from '../contact-me.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss'],
})
export class WorkHistoryComponent implements OnInit {
  constructor(private data: DataService, private contactMe: ContactMeService) {}

  ngOnInit(): void {}

  openContact() {
    this.contactMe.openModal();
  }

  getJobHistory() {
    return this.data.workHistory();
  }

  shouldBeLeft(index: number) {
    return index % 2 == 0 ? true : false;
  }

  toggle(index: number) {
    const classList = document.querySelector('#task-' + index).classList;

    if (classList.contains('hidden')) {
      document.querySelector('#task-' + index).classList.add('block');
      document.querySelector('#task-' + index).classList.remove('hidden');
    } else {
      document.querySelector('#task-' + index).classList.add('hidden');
      document.querySelector('#task-' + index).classList.remove('block');
    }
  }
}
