import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HomePageComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "hello-world", component:HelloWorldComponent},
      {path: "home-page", component:HomePageComponent},
      {path: "rxjs", component:RxjsComponent},
      {path: "", component:HomePageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
