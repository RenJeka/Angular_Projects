import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LessonListComponent } from "./lesson-list/lesson-list.component";
import { SettingsComponent } from "./settings/settings.component";
import {LessonEditorComponent} from "./lesson-editor/lesson-editor.component";


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "lessons"},
  {path: "lessons", component: LessonListComponent},
  {path: "settings", component: SettingsComponent},
  {path: "lessons/edit/:id", component: LessonEditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
