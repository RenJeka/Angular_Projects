import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor() { }

  @Input()
  isVisible = false;
  @Output()
  btnCloseHandler: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  closePopup(): void {

    this.isVisible = !this.isVisible;
    this.btnCloseHandler.emit(true);
  }

}
