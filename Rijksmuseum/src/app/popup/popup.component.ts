import {
  Component,
  OnInit,
} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DataService} from "../shared/data.service";
import {IArtObject} from "../shared/iart-object";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  currentArtObject: IArtObject;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dataService: DataService
  ) { }

  ngOnInit(): void {

    this.dataService.setupOnInitComponents(this.route)
      .then(response => {
        this.currentArtObject = response;
        console.log("this.currentArtObject: ", this.currentArtObject);

      })

  }

  goToDetail() {
    console.log("Navigation...");
    this.router.navigate(['/main', 'detail',  this.currentArtObject.id]);
  }
}
