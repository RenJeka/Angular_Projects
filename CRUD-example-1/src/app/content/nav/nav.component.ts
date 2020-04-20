import { Component, OnInit } from '@angular/core';
import { GetserviceService } from 'src/app/shared/getservice.service';
import { Router } from '@angular/router';
import { Bookslist } from 'src/app/shared/bookslist';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  booksList: Bookslist[]=[];
  message: string;
  searchForm: FormGroup;
  constructor(  private getservise: GetserviceService,
                private router: Router) { }

  ngOnInit() {
    this.getservise.getBooksList().subscribe(books=>this.booksList=books);
    this.searchForm = new FormGroup({search: new FormControl( "", Validators.required)});
  }

  searchBook(name: string){
    let matchFound: boolean = false;  
    for (let i=0; i<this.booksList.length; ++i){
      if ( name === this.booksList[i].name){
          this.router.navigate(['book', this.booksList[i].id])
          matchFound=true;
      }
      if(!matchFound) {
        this.router.navigate(['book', 0])
      }
    }
    
  }
}
