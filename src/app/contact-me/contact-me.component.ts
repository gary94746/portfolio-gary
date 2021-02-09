import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ContactMeService } from '../contact-me.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit {
  constructor(private contacMe: ContactMeService) {}

  ngOnInit(): void {}

  modalClose() {
    this.contacMe.closeModal();
  }

  openModal() {
    this.contacMe.openModal();
  }
}
