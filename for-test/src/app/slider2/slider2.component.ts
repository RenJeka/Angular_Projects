import {ChangeDetectorRef, Component} from '@angular/core';
import {hammerjs} from 'node_modules/hammerjs'
import {animate, keyframes, transition, trigger} from "@angular/animations";
import * as kf from "../shared/keyframes"
import {timer} from "rxjs";

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.scss'],
  animations: [
    trigger('slider2Animation', [
      transition("* => backOutLeft", animate(1000, keyframes(kf.backOutLeft))),
      transition("* => backOutRight", animate(1000, keyframes(kf.backOutRight))),
      transition("zoomIn => *", animate(500, keyframes(kf.zoomIn))),

    ])
  ]
})
export class Slider2Component {

  // Здесь можно менять вид анимации (файл keyframes.ts)
  animations = {
    leaveLeft: "backOutLeft",
    leaveRight: "backOutRight",
    enterLeft: "zoomOutRight",
    enterRight: "slideOutLeft",
    in: "zoomIn",
    swingIn: "swingIn",
    delay: 500 // Необходимо синхронизировать с анимацией
  };


  animationState: string;
  hammerjs = hammerjs;
  title = 'for-test';

  // Массив с картинками
  avatars = [
    {
      name: 'kristy',
      image: 'https://picsum.photos/300?random=1',
      visible: true
    },
    {
      name: 'matthew',
      image: 'https://picsum.photos/300?random=2',
      visible: false
    },
    {
      name: 'chris',
      image: 'https://picsum.photos/300?random=3',
      visible: false
    },
    {
      name: 'jenny',
      image: 'https://picsum.photos/300?random=4',
      visible: false
    },
    {
      name: '111',
      image: 'https://picsum.photos/300?random=5',
      visible: false
    },
    {
      name: '222',
      image: 'https://picsum.photos/300?random=6',
      visible: false
    }
  ];

  constructor(private ref: ChangeDetectorRef) { }



  /**
   * Метод, который обрабатывает свайп
   * @param currentIndex Индекс текущей картинки
   * @param event в какую сторону происходит свайп
   */
  swipe(currentIndex: number, event) {

    // Если вышли за предел массива — свайп не обрабатываем
    if (currentIndex > this.avatars.length || currentIndex < 0) return;

    let nextIndex = 0;
    let myTimer$ = timer(this.animations.delay);
    // если свайп влево
    if (event.type === "swipeleft") {
      if (!this.animationState) {
        this.animationState = this.animations.leaveLeft;
      }
      const isLast = currentIndex === this.avatars.length - 1;
      nextIndex = isLast ? 0 : currentIndex + 1;
      if (!this.animationState) {
        this.animationState = this.animations.leaveLeft;
      }
    }

    // если свайп вправо
    if (event.type === "swiperight") {
      if (!this.animationState) {
        this.animationState = this.animations.leaveRight;
      }
      const isFirst = currentIndex === 0;
      nextIndex = isFirst ? this.avatars.length - 1 : currentIndex - 1;
    }

    // toggle avatar visibility
    // myTimer$.subscribe(() => {
    //   this.avatars.forEach((x, i) => x.visible = (i === nextIndex));
    //   this.animationState = this.animations.in;
    // });

    setTimeout(( ) => {
      this.avatars.forEach((x, i) => x.visible = (i === nextIndex));
      this.animationState = this.animations.in;
      this.ref.detectChanges();

    }, this.animations.delay)
  }

  resetAnimationState() {
    this.animationState = "";
  }
}
