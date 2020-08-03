import { Component, OnInit } from '@angular/core';

import {DataService} from "../shared/data.service";
import {PaginationService} from "../shared/pagination.service";



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {




  constructor(
    public dataService: DataService,
    public paginationService: PaginationService
  ) { }

  ngOnInit(): void {
    // this.dataService.getCollection()
    //   .subscribe((result) => {
    //     this.dataService.artCollection = result;
    //     this.dataService.artObjects = result.artObjects;
    //       // this.artCollection = result;
    //       // this.artObjects = result.artObjects;
    //   });

  }

  searchCollection() {

  }


}
