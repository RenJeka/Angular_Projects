import {
  BrowserModule,
  HammerModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HammerCardComponent } from './hammer-card/hammer-card.component';
import { TestDirectiveComponent } from './test-directive/test-directive.component';
import { MyIfDirective } from './test-directive/my-if.directive';

// app.module.ts
// Конфигурация для разпознавания жестов для библиотеки hammerjs в Angular
// По умолчанию распознаются только горизонтальные жесты
// https://hammerjs.github.io/recognizer-swipe/#notes (читать "notes")
import * as Hammer from 'hammerjs';
import { Slider2Component } from './slider2/slider2.component';
import { NgxSlickComponent } from './ngx-slick/ngx-slick.component';
import { SlickSliderComponent } from './slick-slider/slick-slider.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
export class MyHammerConfiguration extends HammerGestureConfig {
  overrides = <any>{
    'swipe' : {direction: Hammer.DIRECTION_ALL}
  }
}

// ...
// Нужно ниже занести настройку в массив провайдеров
//   providers: [{
//     provide: HAMMER_GESTURE_CONFIG,
//     useClass: MyHammerConfiguration
//   }],

@NgModule({
  declarations: [
    AppComponent,
    HammerCardComponent,
    Slider2Component,
    NgxSlickComponent,
    SlickSliderComponent,
    TestDirectiveComponent,
    MyIfDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
    SlickCarouselModule
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfiguration
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
