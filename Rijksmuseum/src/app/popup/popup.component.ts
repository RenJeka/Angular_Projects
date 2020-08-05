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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dataService: DataService
  ) { }

  ngOnInit(): void {

    this.dataService.setupOnInitComponents(this.route)
      .subscribe((responseObjDetails) => {
        this.artObjectDetails = responseObjDetails
      })
      // .then(response => {
      //   this.currentArtObject = response;
      //   console.log("this.currentArtObject: ", this.currentArtObject);
      //
      // })

  }

  goToDetail() {

    this.router.navigate(['/main', 'detail',  this.artObjectDetails.artObject.objectNumber]);
    // console.log("Navigation...");
    // this.dataService.currentArtObjectDetailsPromise
    //   .then(() => {
    //
    //   })
  }
}
