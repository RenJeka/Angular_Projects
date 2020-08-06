import {Component, OnInit,} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {DataService} from "src/app/shared/data.service";
import {IArtObjectDetails} from "src/app/shared/iart-object-details";

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
    this.router.navigate(['/', 'detail', this.artObjectDetails.artObject.objectNumber]);
  }

  toggleToFavCollection(): void {

    let favIndex;
    if (!this.isInFavoriteCollection) {
      this.dataService.favoriteArtCollection.push(this.artObjectDetails);
      this.isInFavoriteCollection = true;

    } else {
      this.dataService.favoriteArtCollection.forEach((artObjectDetails: IArtObjectDetails, index: number) => {
        if (artObjectDetails.artObject.objectNumber === this.artObjectDetails.artObject.objectNumber) {
          favIndex = index;
        }
      });
      if (favIndex >= 0) {
        this.dataService.favoriteArtCollection.splice(favIndex, 1);
      } else {
        throw new Error(`Не найден элемент текущий элемент ${this.artObjectDetails} в массиве избранного ${this.dataService.favoriteArtCollection}`)
      }
      this.isInFavoriteCollection = false;
    }
  }
}
