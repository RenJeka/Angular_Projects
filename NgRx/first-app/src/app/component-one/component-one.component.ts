import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { ExampleActions } from "../store/example.actions";

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {

 message: string = '';


  constructor(
    private store$: Store
  ) { }

  ngOnInit(): void {
  }

  increaseCount(): void {
    this.store$.dispatch(ExampleActions.increaseCount())
  }

  sendMessage(): void {
    this.store$.dispatch(ExampleActions.sendMassage({message: this.message}))
  }

  getData(): void {
    this.store$.dispatch(ExampleActions.getData());
  }

}
