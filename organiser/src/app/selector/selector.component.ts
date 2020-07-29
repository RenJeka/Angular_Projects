import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  template: `
    <p>
      selector works!
    </p>
  `,
  styles: [
  ]
})
export class SelectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
