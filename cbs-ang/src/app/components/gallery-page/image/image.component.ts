import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {GetGalleryService} from '../../../shared/get-gallery.service';

// export interface PhotoImage {
//   url: string;
// }

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private serviceGetImage: GetGalleryService
  ) { }

  photo;

  goBack() {
    this.router.navigate(['gallery']);
  }

  ngOnInit(): void {
    //console.log(this.activatedRoute);
    this.activatedRoute.params.forEach(paramUrl => {
      const imgID = +paramUrl.imageId;

      // console.log(paramUrl);
      // console.log(imgID);

      this.serviceGetImage.getImg(imgID).subscribe(responce => {
        this.photo = responce;
        console.log(this.photo);
      });
    });
  }


}
