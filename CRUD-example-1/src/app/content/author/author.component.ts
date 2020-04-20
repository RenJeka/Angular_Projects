import { Component, OnInit } from '@angular/core';
import {GetserviceService} from '../../shared/getservice.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Authors } from 'src/app/shared/authors';
import { Bookslist } from 'src/app/shared/bookslist';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authorList: Authors;
  authorName: string;
  authorSername: string;
  booksList: Bookslist[];
  authorBooksList: Bookslist[]=[];
  constructor(private getserviceService: GetserviceService, 
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
    const id=+this.route.snapshot.params['id'];
    this.getserviceService.getAuthor(id).subscribe(authorList => 
      { this.authorList = authorList;
        this.authorName = authorList.name;
        this.authorSername = authorList.surname;
      });
    this.getserviceService.getBooksList().subscribe(booksList=>
      { this.booksList=booksList;
        for( let i: number=0; i<this.booksList.length; i++){
          if (this.booksList[i].authorID==id){
            this.authorBooksList.push(this.booksList[i]);
          }     
        }
      });  
  }

}
