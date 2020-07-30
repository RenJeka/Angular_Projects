import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IArtCollection} from "../shared/iart-collection";
import {DataService} from "../shared/data.service";
import {IArtObject} from "../shared/iart-object";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  artCollection: IArtCollection;
  artObjects: IArtObject[];
  isPopupOpen = false;
  // pagination
  tilesPerPage = 10;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCollection()
      .subscribe((result) => {
          this.artCollection = result;
          this.artObjects = result.artObjects;
      });
  }

  searchCollection() {

  }

  closePopupHandler() {
    this.isPopupOpen = false;
  }
}
