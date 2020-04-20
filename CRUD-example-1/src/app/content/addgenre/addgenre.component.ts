import { Component, OnInit } from '@angular/core';
import { GetserviceService } from 'src/app/shared/getservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Genres } from 'src/app/shared/genres';

@Component({
  selector: 'app-addgenre',
  templateUrl: './addgenre.component.html',
  styleUrls: ['./addgenre.component.css']
})
export class AddgenreComponent implements OnInit {
  addGenreForm: FormGroup;
  genresList: Genres[]=[];
  constructor(  private getservice: GetserviceService,
                private router: Router) { }

  ngOnInit( ) {
    this.getservice.getGenres().subscribe(data=>this.genresList=data);
    this.addGenreForm = new FormGroup({
      genre: new FormControl("", Validators.required)
    })
  }
  createGenre( genre: string){
    this.getservice.addGenre({id: this.genresList[this.genresList.length-1].id+1,
                              genre: genre}).subscribe(data=>this.genresList.push(data));
  }
}
