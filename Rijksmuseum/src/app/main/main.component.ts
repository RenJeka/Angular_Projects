import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {DataService} from "src/app/shared/data.service";
import {PaginationService} from "src/app/shared/pagination.service";


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
  }

  onSubmit(): void {
    this.dataService.searchCollection(this.orderBy.value, this.searchKeyword.value)
  }
}
