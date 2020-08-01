import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {PopupComponent} from "./popup/popup.component";
import {DetailsComponent} from "./details/details.component";


const routes: Routes = [
  {path:'', redirectTo: "main", pathMatch: 'full'},
  {path:'main', component: MainComponent, children: [
      {path:'popup/:id', component: PopupComponent},
      {path:'detail/:id', component: DetailsComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
