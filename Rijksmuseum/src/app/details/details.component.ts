import {Component, OnInit} from '@angular/core';
import {IArtObject} from "../shared/iart-object";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../shared/data.service";
import {IArtObjectDetails} from "../shared/iart-object-details";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

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
      // .then(responseArtObject => {
      //   this.currentArtObject = responseArtObject;
      //
      //   // Запрашиваем детальную информацию об объекте искусства
      //   this.dataService.getArtObjectDetail(this.currentArtObject.objectNumber)
      //     .subscribe((responseArtObjectDetails) => {
      //       console.log("responseArtObjectDetails: ", responseArtObjectDetails);
      //       this.artObjectDetails = responseArtObjectDetails;
      //     })
      // });
  }

  onPressCategory(categoryName: string) {
    console.log("categoryName: ", categoryName);

    this.dataService.searchCollection("relevance", categoryName);
    this.router.navigate(['/main'])
  }

}
