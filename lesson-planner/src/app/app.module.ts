import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LessonListComponent } from "./lesson-list/lesson-list.component";
import { SettingsComponent } from "./settings/settings.component";
import { LessonService } from "./shared/lesson.service";
import { LessonEditorComponent } from "./lesson-editor/lesson-editor.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LessonListComponent,
    SettingsComponent,
    LessonEditorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LessonService],
  bootstrap: [AppComponent]
})
export class AppModule { }