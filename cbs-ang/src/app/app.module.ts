import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { PhotosPageComponent } from './components/photos-page/photos-page.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { Err404Component } from './components/err404/err404.component';
import {HttpClientModule} from '@angular/common/http';
import { ImageComponent } from './components/gallery-page/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    GalleryPageComponent,
    PhotosPageComponent,
    ContactsComponent,
    Err404Component,
    ImageComponent
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
