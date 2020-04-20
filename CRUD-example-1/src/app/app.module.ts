import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './content/nav/nav.component';
import { HttpClientModule} from '@angular/common/http';
import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { ReactiveFormsModule } from '@angular/forms';
import {BackendService} from './shared/backend.service';
import { LibComponent } from './content/lib/lib.component';
import { HttpModule } from '@angular/http';
import { AuthorComponent } from './content/author/author.component';
import { AddauthorComponent } from './content/addauthor/addauthor.component';
import { AddbookComponent } from './content/addbook/addbook.component';
import { AddgenreComponent } from './content/addgenre/addgenre.component';
import { BookComponent } from './content/book/book.component';
import { DeleteComponent } from './content/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    LibComponent,
    AuthorComponent,
    AddauthorComponent,
    AddbookComponent,
    AddgenreComponent,
    BookComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(BackendService),
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
