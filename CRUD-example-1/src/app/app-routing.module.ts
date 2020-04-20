import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibComponent } from './content/lib/lib.component';
import { AuthorComponent } from './content/author/author.component';
import { AddauthorComponent } from './content/addauthor/addauthor.component';
import { AddbookComponent } from './content/addbook/addbook.component';
import { AddgenreComponent } from './content/addgenre/addgenre.component';
import { BookComponent } from './content/book/book.component';
import { DeleteComponent } from './content/delete/delete.component';


const routes: Routes = [
  {path:"", redirectTo:"lib", pathMatch:"full"},
  {path:"lib", component: LibComponent},
  {path:"lib/:id", component: AuthorComponent},
  {path: "addauthor", component: AddauthorComponent},
  {path:"addbook", component: AddbookComponent},
  {path:"addgenre", component: AddgenreComponent},
  {path:"book/:id", component: BookComponent},
  {path:"delete/:id", component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
