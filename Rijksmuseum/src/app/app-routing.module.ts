import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// Components
import {MainComponent} from "src/app/main/main.component";
import {PopupComponent} from "src/app/popup/popup.component";
import {DetailsComponent} from "src/app/details/details.component";
import {ErrorPageComponent} from "src/app/error-page/error-page.component";

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: 'popup/:objNumber', component: PopupComponent},
      {path: 'detail/:objNumber', component: DetailsComponent}
    ]
  },
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
