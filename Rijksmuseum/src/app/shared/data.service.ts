import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IArtCollection} from "./iart-collection";
import {IArtObject} from "./iart-object";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiKey = "v6nas9kT";

  artCollection: IArtCollection;
  artObjects: IArtObject[];

  constructor(private http: HttpClient) {
  }

  /**
   * Метод получает коллекцию с сервера
   */
  getCollection(): Observable<IArtCollection> {
    let observableArtCollection: Observable<IArtCollection>;
    observableArtCollection = this.http.get<IArtCollection>(`https://www.rijksmuseum.nl/api/nl/collection?key=${this.apiKey}`)
    this.setUpDataService(observableArtCollection);
    return observableArtCollection
  }

  /**
   * Метод записывает необходимые свойства сервиса при ответе от сервера.
   * @param observable Observable-объект запроса данных (IArtCollection)
   */
  public setUpDataService(observable: Observable<IArtCollection>): Promise<IArtCollection> {
    return new Promise<IArtCollection>((resolve) => {
      observable.subscribe((responseArtCollection) => {
        this.artCollection = responseArtCollection;
        this.artObjects = responseArtCollection.artObjects;
        resolve(responseArtCollection)
      })
    })
  }

  getArtObjectById(id: string): IArtObject {
    if (this.artCollection) {
      return this.artCollection.artObjects.find(predicate => predicate.id === id)
    } else {
      return null
    }
  }
}
