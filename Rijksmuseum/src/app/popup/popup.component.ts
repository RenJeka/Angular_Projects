import {
  Component, OnDestroy,
  OnInit,
} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DataService} from "../shared/data.service";
import {IArtObject} from "../shared/iart-object";
import {IArtObjectDetails} from "../shared/iart-object-details";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  artObjectDetails: IArtObjectDetails;
  isInFavoriteCollection = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dataService: DataService
  ) { }

  ngOnInit(): void {

    this.dataService.setupOnInitComponents(this.route)
      .subscribe((responseObjDetails) => {
        this.artObjectDetails = responseObjDetails
        this.isInFavoriteCollection = this.checkFavoriteCollection();
      })
      // .then(response => {
      //   this.currentArtObject = response;
      //   console.log("this.currentArtObject: ", this.currentArtObject);
      //
      // })
  }

  /**
   * Метод проверяет, есть ли текущий элемент в коллекции "Избранное". Есть элемент есть — возвращает "true", если нет —
   * возвращает "false"
   */
  private checkFavoriteCollection(): boolean {
    let isRepeatArtElement: IArtObjectDetails = this.dataService.favoriteArtCollection.find((element) => {
      return element.artObject.objectNumber === this.artObjectDetails.artObject.objectNumber
    });
    if (isRepeatArtElement) {
      return true
    } else {
      return false
    }
  }

  goToDetail() {

    this.router.navigate(['/main', 'detail',  this.artObjectDetails.artObject.objectNumber]);
    // console.log("Navigation...");
    // this.dataService.currentArtObjectDetailsPromise
    //   .then(() => {
    //
    //   })
  }

  toggleToFavCollection():void {

    let favIndex;
    if (!this.isInFavoriteCollection) {
      this.dataService.favoriteArtCollection.push(this.artObjectDetails);
      this.isInFavoriteCollection = true;
      console.log("favCollection: ", this.dataService.favoriteArtCollection);

    } else {
      favIndex = this.dataService.favoriteArtCollection.indexOf(this.artObjectDetails);
      if (favIndex !== -1) {
        this.dataService.favoriteArtCollection.splice(favIndex, 1);
      } else {
        throw new Error(`Не найден элемент текущий элемент ${this.artObjectDetails} в массиве избранного ${this.dataService.favoriteArtCollection}`)
      }
      this.isInFavoriteCollection = false;
      console.log("favCollection: ", this.dataService.favoriteArtCollection);
    }
  }
}
