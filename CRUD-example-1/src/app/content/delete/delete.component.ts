import { Component, OnInit } from '@angular/core';
import { Authors } from 'src/app/shared/authors';
import { GetserviceService } from 'src/app/shared/getservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookslist } from 'src/app/shared/bookslist';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  authorList: Authors;
  booksList: Bookslist;
  deleteItem: string;
  isAuthor: boolean;
  isBook: boolean;
  constructor(  private getserviceService: GetserviceService, 
                private route: ActivatedRoute, 
                private router: Router) { }

  ngOnInit() {
    const id=+this.route.snapshot.params['id'];
    this.route.queryParams.subscribe(data=>{
      this.deleteItem=data['delete']});
    if(this.deleteItem=="author"){
      this.getserviceService.getAuthor(id).subscribe(data=>this.authorList=data);
      this.isAuthor=true;    
      this.isBook=false;
    }  

    if(this.deleteItem=="book"){
      this.getserviceService.getBook(id).subscribe(book=>this.booksList=book);
      
      this.isAuthor=false;    
      this.isBook=true; 
    }  
  }
  deleteAuthor(id: number){
    this.getserviceService.deleteAuthor(id).subscribe();
    this.router.navigate(['lib']);
  }

  deleteBook(id: number, authorID: number){
    this.getserviceService.deleteBook(id).subscribe();
    this.router.navigate(['lib', authorID]);
  }
  
}
