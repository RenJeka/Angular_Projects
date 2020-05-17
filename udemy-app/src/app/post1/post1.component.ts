import { Component } from '@angular/core';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.scss']
})
export class Post1Component {
  title = 'Some text';
  myArr: number[] = [1, 2, 32, 55, 22];
  obj = {
    val1: 'someObjectText',
    val2: 22,
    proffession: 'hacker',
    isMarried: true
  };

  inputValue = '';
  inputTitle = '';

  onClick(str: string) {
    this.inputValue = str;
  }
  onInput(event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  onBlur(str: string) {
    this.inputValue = str.toUpperCase();
  }
}
