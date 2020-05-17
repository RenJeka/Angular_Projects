import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {GalleryPageComponent} from './components/gallery-page/gallery-page.component';
import {PhotosPageComponent} from './components/photos-page/photos-page.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {Err404Component} from './components/err404/err404.component';
import {ImageComponent} from './components/gallery-page/image/image.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'gallery', component: GalleryPageComponent},
  {path: 'gallery/:imageId', component: ImageComponent},
  {path: 'photos', component: PhotosPageComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', component: Err404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
