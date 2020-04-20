import { Component, OnInit } from '@angular/core';
import { Bookslist } from 'src/app/shared/bookslist';
import { GetserviceService } from 'src/app/shared/getservice.service';
import { ActivatedRoute} from '@angular/router';
import { Authors } from 'src/app/shared/authors';
import { takeUntil, switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: Bookslist;
  authorsList: Authors[]=[];
  author: Authors;
  isFound:boolean;
  constructor(private getserviceService: GetserviceService, 
              private route: ActivatedRoute) { }

  ngOnInit(){ 
    this.loadBook();
    
  }

  loadBook(){
    let id: number;
    this.route.paramMap.pipe( switchMap(params=>params.getAll("id"))).subscribe(data=>
      {id=+data;
        if(id!=0){ 
          this.startLoadBook(id)
          this.isFound=true;
        }
        else {
          this.isFound=false;
          this.startLoadBook(id)
        }
      })
       
  }
  startLoadBook(id: number){
    this.getserviceService.getBook(id).subscribe(book=>{
        this.book = book;
        if(id!=0){
          this.getserviceService.getAuthor(this.book.authorID).subscribe(data=>this.author=data);
        }
      });
  }

}
