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
    s: "relevance",
    q: '',
    imgonly: 'True',
    type: '',
    material: '',
    technique: '',
    'f.dating.period': '',
    'f.normalized32Colors.hex': '',
  };
  private allowedSortTypes = [
    'relevance',
    'objecttype',
    'chronologic',
    'achronologic',
    'artist',
    'artistdesc',
  ];
  private allowedQueryParams = [
    'key',
    'p',
    'ps',
    's',
    'q',
    'imgonly',
    'type',
    'material',
    'technique',
    'f.dating.period',
    'f.normalized32Colors.hex',
  ];
  private setUpDataServicePromise: Promise<IArtCollection>;

  showFavorite = false;
  artCollection: IArtCollection;
  artObjects: IArtObject[];
  currentArtObjectDetails: IArtObjectDetails;
  isArtCollectionLoaded = false;
  isObjDetailsLoaded = false;

  favoriteArtCollection: IArtObjectDetails[] = [];
  constructor(
    private http: HttpClient,
    private paginationService: PaginationService,
  ) {
    this.paginationService.paginatorStream$
      .subscribe((paginationSettings) => {
        this.urlQueryParams.p = paginationSettings.currentPage.toString();
        this.urlQueryParams.ps = paginationSettings.objectPerPage.toString();
        this.setUpDataServicePromise = this.setUpDataService(this.getCollection());
      });
  }

  /**
   * Метод получает коллекцию с сервера
   */
  getCollection(): Observable<IArtCollection> {
    this.isArtCollectionLoaded = false;
    this.deleteEmptyPropertiesInObject(this.urlQueryParams);
    let queryParams = Object.entries(this.urlQueryParams).map(arrPair => arrPair.join("=")).join("&");
    let observableArtCollection: Observable<IArtCollection>;
    observableArtCollection = this.http.get<IArtCollection>(`https://www.rijksmuseum.nl/api/en/collection?${queryParams}`);
    return observableArtCollection
  }

  /**
   * Метод запускает запрос для получения коллекции Арт Объектов с условием поиска
   * @param orderBy — тип сортировки
   * @param searchKewword — Ключевое слово для поиска
   */
  searchCollection(orderBy: string, searchKewword?: string): void {

    // Проверяем на подлинность выбраного значения "select"
    let allowdSotTypeIndex = this.allowedSortTypes.findIndex((sortType) => sortType === orderBy.trim());
    if (allowdSotTypeIndex >= 0 && allowdSotTypeIndex < this.allowedSortTypes.length) {
    } else {
      // Если переданный тип сортировки  не прошел проверку — берем первый тип сортировки с разрешенных типов
      // (установка по умолчанию)
      orderBy = this.allowedSortTypes[0];
    }
    this.urlQueryParams.s = orderBy;
    if (searchKewword && searchKewword.trim().length > 0) {
      this.urlQueryParams.q = encodeURI(searchKewword);
    } else {
      delete this.urlQueryParams.q
    }
    this.setUpDataService(this.getCollection());
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
   * Метод запускает запрос для получения коллекции Арт Объектов с условием поиска по тегам
   * @param searchingTagObj — объект с тегом и его значением
   */
  public searchByTag(searchingTagObj: { [propName: string]: any }) {
    this.fillUrlQueryParams(searchingTagObj);
    this.setUpDataService(this.getCollection());
  }

  /**
   * Метод удаляет пустые свойства у объекта
   * @param objectLink Объект, у которого нужно найти и удалить пустые свойства
   */
  private deleteEmptyPropertiesInObject(objectLink: { [propName: string]: string }): void {
    let objectKeys = Object.keys(objectLink);
    let emptyKeys = objectKeys.filter((key) => {
      // Если свойство объекта пустое или оно === null — добавляем его в отфильтрованный массив
      return objectLink[key].trim().length <= 0;
    });

    emptyKeys.forEach((key) => {
      delete objectLink[key]
    });
  }

  /**
   * Метод правильно заполняет объект с QueryParams (с которого будут в последствии взяты параметры запроса, чтобы
   * сделать запрос на сервер)
   * @param params параметры, значениями которых необходимо заполнить объект "urlQueryParams"
   */
  public fillUrlQueryParams(params: { [propName: string]: any }): void {
    for (let key in params) {
      if (this.allowedQueryParams.indexOf(key) !== -1) {

        // свойства 'f.dating.period' и 'f.normalized32Colors.hex' должны быть в правильном формате
        switch (key) {
          case 'f.dating.period': {
            if ((parseInt(params[key]) > 0 && parseInt(params[key]) <= 21)) {
              this.urlQueryParams[key] = params[key];
            } else {
              throw new Error("Значение параметра  'f.dating.period' должно быть от '0' до '21', а вы передали ${params[key]}")
            }
            break;
          }

          case 'f.normalized32Colors.hex': {
            if ((/#[a-f0-9]{3,6}/gi).test(params[key])) {
              this.urlQueryParams[key] = params[key];
            } else {
              throw new Error(`Значение параметра 'f.normalized32Colors.hex' должно быть в формате HTMLhexColor, а  вы передали ${params[key]}`)
            }
            break;
          }

          default: {
            this.urlQueryParams[key] = params[key];
          }
        }
      } else {
        throw new Error("Вы передали неверное название параметра")
      }
    }
  }

  /**
   * Метод записывает необходимые свойства сервиса при ответе от сервера.
   * @param observable Observable-объект запроса данных (IArtCollection)
   */
  public setUpDataService(observable: Observable<IArtCollection>): Promise<IArtCollection> {
    this.showFavorite = false;
    return new Promise<IArtCollection>((resolve) => {
      observable.subscribe((responseArtCollection) => {
        this.artCollection = responseArtCollection;
        this.artObjects = responseArtCollection.artObjects;
        this.isArtCollectionLoaded = true;
        resolve(responseArtCollection)
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
  public setupOnInitComponents(activatedRoute: ActivatedRoute): Observable<IArtObjectDetails> {

    return new Observable<IArtObjectDetails>((observer) => {

      activatedRoute.params.subscribe((params: Params) => {

        // Если запрос на получения детальных данных уже сделан для этого арт-объекта — просто возвращаем эти данные
        // (чтобы не делать повторный запрос)
        if (this.currentArtObjectDetails && (this.currentArtObjectDetails.artObject.objectNumber === params.objNumber)) {
          observer.next(this.currentArtObjectDetails);
        } else {

          this.isObjDetailsLoaded = false;
          this.getArtObjectDetail(params.objNumber)
            .subscribe(response => {
              this.currentArtObjectDetails = response;
              this.isObjDetailsLoaded = true;
              observer.next(response);
            })
        }
      })
    })
  }
}
