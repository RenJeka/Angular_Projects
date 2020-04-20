import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Authors } from './authors';
import { Genres } from './genres'
import { map } from 'rxjs/operators';
import { Bookslist } from './bookslist';

@Injectable({
  providedIn: 'root'
})
export class GetserviceService {
  public authorsUrl = 'api/authors';
  public genresUrl = 'api/genres';
  public bookslistUrl = 'api/bookslist';
  constructor(private httpClient: HttpClient) { }

  getAuthors(): Observable<Authors[]>{
    return this.httpClient.get<Authors[]>(this.authorsUrl);
  }

  getAuthor(id: number): Observable<Authors>{
    return this.httpClient.get<Authors>(this.authorsUrl +"/"+id);
  }
  getGenres(): Observable<Genres[]>{
    return this.httpClient.get<Genres[]>(this.genresUrl);
  }
  getBooksList():Observable<Bookslist[]>{
    return this.httpClient.get<Bookslist[]>(this.bookslistUrl);
  }
  addAuthor(author: Authors): Observable<Authors>{
    return this.httpClient.post<Authors>(this.authorsUrl, author);
  } 
  addBook(book: Bookslist): Observable<Bookslist>{
    return this.httpClient.post<Bookslist>(this.bookslistUrl, book);
  }
  addGenre(genre: Genres): Observable<Genres>{
    return this.httpClient.post<Genres>(this.genresUrl, genre);
  }
  getBook(id:number): Observable<Bookslist>{
    return this.httpClient.get<Bookslist>(this.bookslistUrl +"/"+id);
  }
  deleteAuthor(id: number): Observable<Authors>{
    return this.httpClient.delete<Authors>(this.authorsUrl+'/'+id);
  }
  deleteBook(id: number): Observable<Bookslist>{
    return this.httpClient.delete<Bookslist>(this.bookslistUrl+"/"+id)
  }
}
