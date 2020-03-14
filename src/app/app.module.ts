import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "hello-world", component:HelloWorldComponent},
      {path: "home-page", component:HomePageComponent},
      {path: "", component:HomePageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
