import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IArtCollection} from "./iart-collection";
import {IArtObject} from "./iart-object";
import {ActivatedRoute, Params} from "@angular/router";
import {IArtObjectDetails} from "./iart-object-details";
import {PaginationService} from "./pagination.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiKey = "v6nas9kT";
  private urlQueryParams = {
    key: "v6nas9kT",
    p: this.paginationService.paginatorSettings.currentPage.toString(),
    ps: this.paginationService.paginatorSettings.objectPerPage.toString(),
  };

  artCollection: IArtCollection;
  artObjects: IArtObject[];
  isLoading = true;

  constructor(
    private http: HttpClient,
    private paginationService: PaginationService,
  ) {
    // this.getCollection();
    this.paginationService.paginatorStream$
      .subscribe((paginationSettings) => {
        this.urlQueryParams.p = paginationSettings.currentPage.toString();
        this.urlQueryParams.ps = paginationSettings.objectPerPage.toString();
        this.getCollection();
      });
  }

  /**
   * Метод получает коллекцию с сервера
   */
  getCollection(): Observable<IArtCollection> {
    this.isLoading = true;
    let queryParams = Object.entries(this.urlQueryParams).map(arrPair => arrPair.join("=")).join("&");
    let observableArtCollection: Observable<IArtCollection>;
    observableArtCollection = this.http.get<IArtCollection>(`https://www.rijksmuseum.nl/api/en/collection?${queryParams}`);
    console.log("get collection loaded!");

    this.setUpDataService(observableArtCollection);
    return observableArtCollection
  }

  /**
   * Метод получает дополнительную информацию о объекте искусства
   * @param objectNumber Номер объекта, по которому нужно найти доп. информацию
   * @see https://data.rijksmuseum.nl/object-metadata/api/#collection-details-api
   */
  getArtObjectDetail(objectNumber: string): Observable<IArtObjectDetails> {
    return this.http.get<IArtObjectDetails>(`https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=${this.apiKey}`)
  }

  /**
   * Метод записывает необходимые свойства сервиса при ответе от сервера.
   * @param observable Observable-объект запроса данных (IArtCollection)
   */
  // public setUpDataService(observable: Observable<IArtCollection>): Promise<IArtCollection> {
  //   return new Promise<IArtCollection>((resolve) => {
  //     observable.subscribe((responseArtCollection) => {
  //       this.artCollection = responseArtCollection;
  //       this.artObjects = responseArtCollection.artObjects;
  //       console.log(responseArtCollection);
  //       this.isLoading = false;
  //       resolve(responseArtCollection)
  //     })
  //   })
  // }
  public setUpDataService(observable: Observable<IArtCollection>): Observable<IArtCollection> {
    return new Observable<IArtCollection>((subscriber) => {
      observable.subscribe((responseArtCollection) => {
        this.artCollection = responseArtCollection;
        this.artObjects = responseArtCollection.artObjects;
        console.log("responseArtCollection: ", responseArtCollection);
        this.isLoading = false;
        subscriber.next(responseArtCollection)
      })
    })
  }

  public getArtObjectById(id: string): IArtObject {
    if (this.artCollection) {
      return this.artCollection.artObjects.find(predicate => predicate.id === id)
    } else {
      return null
    }
  }

  /**
   * Метод настраивает инициализацию компонента (передает в компонент нужный Арт-объект)
   * @description Задача меотда — дать более простой интерфейс для инициализации компонента и
   * избавится от повторяющегося кода.
   * @param activatedRoute ссылка на инжектированный "activatedRoute" в компоненте
   */
  public setupOnInitComponents(activatedRoute: ActivatedRoute): Promise<IArtObject> {

    return new Promise<IArtObject>((resolve) => {
      activatedRoute.params.subscribe((params: Params) => {
        // Проверка нужна в случае, если пользователь скопировал и вставил адрес сразу в URL, или перезагрузил страницу
        if (this.artCollection) {
          resolve(this.getArtObjectById(params.id));
        } else {
          this.setUpDataService(this.getCollection())
            .subscribe(() => {
              resolve(this.getArtObjectById(params.id));
            })
        }
      })
    })
  }
}
