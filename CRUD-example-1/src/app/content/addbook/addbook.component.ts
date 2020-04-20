import { Component, OnInit } from '@angular/core';
import { GetserviceService } from 'src/app/shared/getservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Authors } from 'src/app/shared/authors';
import { Genres } from 'src/app/shared/genres';
import { Bookslist } from 'src/app/shared/bookslist';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  addBookForm: FormGroup;
  authorsList: Authors[]=[];
  genresList: Genres[]=[];
  booksList: Bookslist[]=[];
  mId:number;
  constructor(  private getservise: GetserviceService,
                private router: Router) {  }

  ngOnInit() {
    this.createForm();
    this.getservise.getAuthors().subscribe(data=>this.authorsList=data);
    this.getservise.getGenres().subscribe(genres=>this.genresList=genres);
    this.getservise.getBooksList().subscribe(books=>this.booksList=books);
  }

 
  createForm(){
    this.addBookForm = new FormGroup({
      author: new FormControl(""),
      name: new FormControl("", Validators.required),
      pages: new FormControl("", Validators.required),
      genre: new FormControl("")
    });
  }

  createBook(author: number, name: string, pages: number, genre: string){
    this.getservise.addBook({id: this.booksList[this.booksList.length-1].id+1,
                            authorID: author,
                            name: name,
                            pages: pages,
                            genre: genre
    }).subscribe(data=>this.booksList.push(data));
    this.goBack(author);
  }
  goBack(id: number){
    this.router.navigate(['lib', id])
  }
}
