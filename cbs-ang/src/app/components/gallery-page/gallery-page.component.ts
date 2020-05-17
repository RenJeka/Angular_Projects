import { Component, OnInit } from '@angular/core';
import {GetGalleryService} from '../../shared/get-gallery.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

  constructor(
    private httpMyService: GetGalleryService,
    private route: Router
    ) { }

  goToImagePage(obj) {
    this.route.navigate(['gallery', obj.id]);
  }



  ngOnInit(): void {

    this.httpMyService.getImages().subscribe((responce) => {
      this.galleryMy = responce;
      //console.dir(responce);
    });

  }

  galleryMy




    //= [
    // {title: 'photo 1', content: '', imgUrl: 'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg'},
    // {title: 'photo 2', content: '', imgUrl: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg'},
    // {title: 'photo 3', content: '', imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'},
    // {title: 'photo 4', content: '', imgUrl: 'https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg'},
  // ];

}
