import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactMeService {
  constructor() {}

  openModal() {
    const modal = document.querySelector('.main-modal');
    modal.classList.remove('fadeOut');
    modal.classList.add('fadeIn');
    (modal as any).style.display = 'flex';
  }

  closeModal() {
    const modal = document.querySelector('.main-modal');
    modal.classList.remove('fadeIn');
    modal.classList.add('fadeOut');
    setTimeout(() => {
      (modal as any).style.display = 'none';
    }, 500);
  }
}
