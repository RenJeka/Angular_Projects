import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {PopupComponent} from "./popup/popup.component";
import {DetailsComponent} from "./details/details.component";
import {ErrorPageComponent} from "./error-page/error-page.component";


const routes: Routes = [
  {path:'', redirectTo: "main", pathMatch: 'full'},
  {path:'main', component: MainComponent, children: [
      {path:'popup/:objNumber', component: PopupComponent},
      {path:'detail/:objNumber', component: DetailsComponent}
    ]},
  {path: 'error', component: ErrorPageComponent},
  {path: '**',redirectTo: 'error'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
