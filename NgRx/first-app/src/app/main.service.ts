import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
  }
}
