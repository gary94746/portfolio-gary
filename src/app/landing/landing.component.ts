import { Component, OnInit } from '@angular/core';
import { ContactMeService } from '../contact-me.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(private contacMe: ContactMeService) {}

  ngOnInit(): void {}

  modalClose() {
    this.contacMe.closeModal();
  }

  openModal() {
    this.contacMe.openModal();
  }
}
