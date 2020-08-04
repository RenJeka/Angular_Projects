import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {DataService} from "../shared/data.service";
import {PaginationService} from "../shared/pagination.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // form
  public searchForm: FormGroup;
  public orderBy = new FormControl("");
  public searchKeyword = new FormControl("");

  constructor(
    public dataService: DataService,
    public paginationService: PaginationService
  ) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      orderBy: this.orderBy,
      searchKeyword: this.searchKeyword
    });
    // this.dataService.getCollection()
    //   .subscribe((result) => {
    //     this.dataService.artCollection = result;
    //     this.dataService.artObjects = result.artObjects;
    //       // this.artCollection = result;
    //       // this.artObjects = result.artObjects;
    //   });

  }

  onSubmit(): void {
    console.log("this.orderBy.value: ", this.orderBy.value);
    console.log("this.searchKeyword.value: ", encodeURI(this.searchKeyword.value));

    this.dataService.searchCollection(this.orderBy.value, this.searchKeyword.value)
  }

}
