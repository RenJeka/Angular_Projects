import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public isOpenClass = 'modal-is-open';
  public openingClass = 'modal-is-opening';
  public closingClass = 'modal-is-closing';
  public animationDuration = 400; // ms
  public visibleModal = null;

  constructor(
  ) { }

  ngOnInit(): void {
    // Close with a click outside
    document.addEventListener('click', event => {
      if (this.visibleModal != null) {
        const modalContent = this.visibleModal.querySelector('article');
        const isClickInside = modalContent.contains(event.target);
        !isClickInside && this.closeModal(this.visibleModal);
      }
    });

    // Close with Esc key
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && this.visibleModal != null) {
        this.closeModal(this.visibleModal);
      }
    });

  }

  public toggleModal(event) {
    event.preventDefault();
    const modal = document.getElementById(event.currentTarget.getAttribute('data-target'));
    (typeof(modal) != 'undefined' && modal != null)
      && this.isModalOpen(modal) ? this.closeModal(modal) : this.openModal(modal)
  }

  public getPrefferedColorScheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private isModalOpen(modal) {
    return modal.hasAttribute('open') && modal.getAttribute('open') != 'false' ? true : false;
  }

  private openModal(modal) {
    if (this.isScrollbarVisible()) {
      document.documentElement.style.setProperty('--scrollbar-width', `${this.getScrollbarWidth()}px`);
    }
    document.documentElement.classList.add(this.isOpenClass, this.openingClass);
    setTimeout(() => {
      this.visibleModal = modal;
      document.documentElement.classList.remove(this.openingClass);
    }, this.animationDuration);
    modal.setAttribute('open', true);
  }

  private closeModal(modal) {
    this.visibleModal = null;
    document.documentElement.classList.add(this.closingClass);
    setTimeout(() => {
      document.documentElement.classList.remove(this.closingClass, this.isOpenClass);
      document.documentElement.style.removeProperty('--scrollbar-width');
      modal.removeAttribute('open');
    }, this.animationDuration);
  }


  private getScrollbarWidth() {

    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    //@ts-ignore
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
  }

  private isScrollbarVisible() {
    return document.body.scrollHeight > screen.height;

  }

}
