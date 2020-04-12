import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

// import {PhotoImage} from '../components/gallery-page/image/image.component';

@Injectable({
  providedIn: 'root'
})
export class GetGalleryService {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get('http://jsonplaceholder.typicode.com/photos?_limit=20');
  }

  getImg(pageId) {
    return this.http.get(`http://jsonplaceholder.typicode.com/photos/${pageId}`);
  }
}
