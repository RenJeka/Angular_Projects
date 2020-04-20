import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Authors} from '../../shared/authors';
import {Genres} from '../../shared/genres';
import {GetserviceService} from '../../shared/getservice.service'

@Component({
  selector: 'app-lib',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.css']
})
export class LibComponent implements OnInit {
  libList: Authors[];
  genresList: Genres[];
  
  constructor( private getserviceService: GetserviceService) { }

  ngOnInit() {
    this.getserviceService.getAuthors().subscribe(libList=>this.libList=libList);
    this.getserviceService.getGenres().subscribe(genres=>this.genresList=genres);
  }

}
