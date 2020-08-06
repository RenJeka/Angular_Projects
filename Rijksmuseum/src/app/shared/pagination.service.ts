import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

type OddNumbers = 1 | 3 | 5 | 7 | 9 | 11 | 13 | 15; // TODO: Найти способ указать в интерфейсе только нечетные числа

interface IPaginatorSettings {
  currentPage: number;
  paginatorScaleLength: OddNumbers;
  objectPerPage: number;
  maximumPages: number | null;
  allowedResultsPerPage: string[];
  paging: number[];
}

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  paginatorSettings = {
    currentPage: 1,
    paginatorScaleLength: 5 as OddNumbers,
    maximumPages: null,
    objectPerPage: 30,
    allowedResultsPerPage: ["20", "30", "50", "100"],
    paging: []

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

  constructor() {
    this.setChangies();
  }

  recalculatePaging(): void {
    let pages = [];
    let halfPaging = (Math.floor(this.paginatorSettings.paginatorScaleLength / 2));
    // Находим номер страницы, с которой должна начинатся пагинация
    let startPagingNumber = +this.paginatorSettings.currentPage - halfPaging;
    if (startPagingNumber <= 0) {startPagingNumber = 1}
    let endPagingNumber = +this.paginatorSettings.currentPage + halfPaging;
    if (endPagingNumber > this.paginatorSettings.maximumPages) {endPagingNumber = this.paginatorSettings.maximumPages}

    if (endPagingNumber  < this.paginatorSettings.maximumPages) {
      for (let i = 0; i < this.paginatorSettings.paginatorScaleLength; i++) {
        pages.push(startPagingNumber);
        startPagingNumber++
      }
      this.paginatorSettings.paging = pages;
    } else {
      startPagingNumber = this.paginatorSettings.maximumPages - (this.paginatorSettings.paginatorScaleLength - 1);
      for (let i = 0; i < this.paginatorSettings.paginatorScaleLength; i++) {
        pages.push(startPagingNumber);
        startPagingNumber++
      }
      this.paginatorSettings.paging = pages;
    }

    console.log(pages);
  }

  private recalculateMaxPages(): void {
    this.paginatorSettings.maximumPages = Math.floor(10000 / this.paginatorSettings.objectPerPage);
  }

  /**
   * Метод изменяет настройки объекта пагинации и эмитит стрим (отправляет настройки в другой сервис)
   * @param currentPage текущая страница
   */
  private setChangies(currentPage?: number): void {
    if (currentPage) {
      this.paginatorSettings.currentPage = currentPage;
    }
    this.recalculateMaxPages();
    this.recalculatePaging();
    this.paginatorStream$.next(this.paginatorSettings);
  }

  // ===== USER INTERFACE — START =====
  changeResultsPerPage(numberOfResults: number): void {
    this.paginatorSettings.objectPerPage = numberOfResults;
    this.setChangies();
  }

  changePage(page: number): void {
    if (page < 1 ) {
      page = 1
    } else if (page > this.paginatorSettings.maximumPages) {
      page = this.paginatorSettings.maximumPages;
    }
    this.setChangies(page);
  }

  goToStart(): void {
    this.setChangies(1);
  }

  goToFinish(): void {
    this.setChangies(this.paginatorSettings.maximumPages);
  }

  goPrev(): void {
    if (this.paginatorSettings.currentPage > 1) {
      this.setChangies(--this.paginatorSettings.currentPage);
    } else {
      this.setChangies(1);
    }
  }

  goNext(): void {
    if (this.paginatorSettings.currentPage < this.paginatorSettings.maximumPages) {
      this.setChangies(++this.paginatorSettings.currentPage);
    } else {
      this.setChangies(this.paginatorSettings.maximumPages);
    }
  }
  // ===== USER INTERFACE — FINISH =====
}
