import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ExampleSelectors } from "../store/example.selector";

@Component({
  selector: 'app-store-window',
  templateUrl: './store-window.component.html',
  styleUrls: ['./store-window.component.scss']
})
export class StoreWindowComponent implements OnInit {

  public allData$: Observable<any>;
  constructor(
    private store$: Store,
  ) {
    this.allData$ = this.store$.select(ExampleSelectors.allData);
  }

  ngOnInit(): void {
  }

}
