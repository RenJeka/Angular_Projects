import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ExampleSelectors } from "../store/example.selector";

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {

  public count$: Observable<number>;
  public message$: Observable<string>;
  public data$: Observable<string>;
  constructor(
    private store$: Store,
  ) {
    this.count$ = this.store$.select(ExampleSelectors.count);
    this.message$ = this.store$.select(ExampleSelectors.message);
    this.data$ = this.store$.select(ExampleSelectors.data);
  }

  ngOnInit(): void {
  }

}
