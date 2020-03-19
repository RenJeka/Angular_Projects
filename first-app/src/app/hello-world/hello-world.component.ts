import { Component } from '@angular/core';

const VALUES = [
  { greeting:"Hello World", link:"https://www.cambridgeenglish.org/"},
  { greeting:"Привет Мир", link:""},
  { greeting:"Привіт Світ", link:""},
  { greeting:"Hola Mundo", link:""},
  { greeting:"Bonjour le monde", link:""},
  { greeting:"Hallo Welt", link:""},
  { greeting:"Ciao mondo", link:""},
  { greeting:"Witaj świecie", link:"https://poland.pl/"},
  { greeting:"Hej världen", link:""},
  { greeting:"Pozdravljen svet", link:""},
  { greeting:"Прывітанне Сусвет", link:""}
]


@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent{

  myValues:{greeting, link}[] = VALUES;
  flag:boolean =  false;

  getValue(){

    if (!this.flag) {
      let ul:HTMLElement = document.querySelector("#myUl"),
        liElement: HTMLElement;

    
      for (let i = 0; i < VALUES.length; i++) {

        liElement = document.createElement("li");
        liElement.innerHTML = VALUES[i].greeting ;
        ul.appendChild(liElement);
      }
      this.flag = true;
    }
  }
}
