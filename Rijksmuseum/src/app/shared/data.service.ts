import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IArtCollection} from "./iart-collection";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiKey = "v6nas9kT";

  artCollection: IArtCollection;

  constructor(private http: HttpClient) { }

  getCollection(): Observable<IArtCollection> {
    return this.http.get<IArtCollection>(`https://www.rijksmuseum.nl/api/nl/collection?key=${this.apiKey}`)
  }

  setupSrvice( ) {

  }
}
