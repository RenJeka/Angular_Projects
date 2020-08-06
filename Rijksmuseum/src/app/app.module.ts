import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

// Modules
import { AppRoutingModule } from 'src/app/app-routing.module';

// Components
import { AppComponent } from 'src/app/app.component';
import { MainComponent } from 'src/app/main/main.component';
import { PopupComponent } from 'src/app/popup/popup.component';
import { DetailsComponent } from 'src/app/details/details.component';
import { ErrorPageComponent } from 'src/app/error-page/error-page.component';

// Directives
import { ImageScaleDirective } from 'src/app/shared/image-scale.directive';
import { NgForWithNumbersDirective } from 'src/app/shared/ng-for-with-numbers.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PopupComponent,
    DetailsComponent,
    NgForWithNumbersDirective,
    ImageScaleDirective,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
