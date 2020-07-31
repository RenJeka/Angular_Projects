import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../shared/data.service";
import {IArtObject} from "../shared/iart-object";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input()
  isVisible = false;
  @Output()
  btnCloseHandler: EventEmitter<boolean> = new EventEmitter<boolean>();

  currentArtObject: IArtObject;

  constructor(
    private route: ActivatedRoute,
    public dataService: DataService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      if (this.dataService.artCollection) {
        this.currentArtObject = this.dataService.getArtObjectById(params.id)
      } else {
        this.dataService.setUpDataService(this.dataService.getCollection())
          .then(() => {
            this.currentArtObject = this.dataService.getArtObjectById(params.id)
          })
      }

    })
  }

  closePopup(): void {
    this.isVisible = !this.isVisible;
    this.btnCloseHandler.emit(true);
  }

}
