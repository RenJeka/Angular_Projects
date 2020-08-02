import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PopupComponent } from './popup/popup.component';
import { DetailsComponent } from './details/details.component';
import {HttpClientModule} from "@angular/common/http";
import { NgForWithNumbersDirective } from './shared/ng-for-with-numbers.directive';
import { ImageScaleDirective } from './shared/image-scale.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PopupComponent,
    DetailsComponent,
    NgForWithNumbersDirective,
    ImageScaleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
