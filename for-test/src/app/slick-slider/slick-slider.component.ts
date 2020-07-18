import { Component, OnInit } from '@angular/core';
import 'slick-carousel';

@Component({
  selector: 'app-slick-slider',
  templateUrl: './slick-slider.component.html',
  styleUrls: ['./slick-slider.component.scss']
})
export class SlickSliderComponent implements OnInit {

  slides = [342, 453, 846];
  slideConfig: JQuerySlickOptions = {
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'>111 </div>",
    prevArrow: "<div class='nav-btn prev-slide'>222 </div>",
    dots: true,
    infinite: false,
    arrows: true
  };

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {

      $(".carousel").slick(this.slideConfig);
    });
  }

  addSlide() {
    this.slides.push(488);
  }

  removeSlide() {
    this.slides.pop();
  }

  slickInit($event) {
    console.log("Инициализирован !");
  }

  breakpoint(e) {
    console.log("breakpoint !");
  }

  afterChange(e) {
    console.log("afterChange !");
  }

  beforeChange(e) {
    console.log("beforeChange !");
  }
}
