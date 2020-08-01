import { Component, OnInit } from '@angular/core';
import {IArtObject} from "../shared/iart-object";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DataService} from "../shared/data.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  currentArtObject: IArtObject;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.setupOnInitComponents(this.route)
      .then(response => {
        this.currentArtObject = response;
      })
  }

}
