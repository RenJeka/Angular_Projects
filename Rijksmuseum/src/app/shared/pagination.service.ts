import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

type OddNumbers = 1 | 3 | 5 | 7 | 9 | 11 | 13 | 15; // TODO: Найти способ указать в интерфейсе только нечетные числа

interface IPaginatorSettings {
  currentPage: number;
  paginatorScaleLength: OddNumbers;
  currentResultsPerPage: number;
  allowedResultsPerPage: string[]
}

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  paginatorSettings = {
    currentPage: 1,
    paginatorScaleLength: 5 as OddNumbers,
    currentResultsPerPage: 30,
    allowedResultsPerPage: ["20", "30", "50", "100"]

    // // TODO: Реализовать свойство "paginatorScaleLength" через 'get', 'set'
    // set paginatorScaleLength(lengthNum: number) {
    //   this.paginatorSettings._paginatorScaleLength = lengthNum as OddNumbers;
    // },
    // get paginatorScaleLength() {
    //   return this.paginatorSettings._paginatorScaleLength
    // },
    // _paginatorScaleLength: 5,

  };

  paginatorStream$: BehaviorSubject<IPaginatorSettings> = new BehaviorSubject(this.paginatorSettings);

  constructor() { }

  changeResultsPerPage(numberOfResults: number) {
    console.log("numberOfResults: ", numberOfResults);

    this.paginatorSettings.currentResultsPerPage = numberOfResults;
    this.paginatorStream$.next(this.paginatorSettings);
  }
}
