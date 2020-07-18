import { Component } from '@angular/core';

@Component({
  selector: 'app-test-directive',
  templateUrl: './test-directive.component.html',

})
export class TestDirectiveComponent  {

  visible: boolean = false;

  changeVisibility() {
    this.visible = !this.visible;
  }

}
