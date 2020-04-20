import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService {

  constructor() { }
  createDb(){
    let authors = [
      {id: 1, surname: "Рэнд", name: "Айн", secondname:"", birthdate:"1905-02-02"},
      {id: 2, surname: "Браун", name: "Дэниэл", secondname:"Герхард", birthdate:"1964-06-22"},
      {id: 3, surname: "Конан Дойл", name: "Артур", secondname:"", birthdate:"1859-05-22"}
    ];
    let genres = [
      {id:1, genre:"Роман"},
      {id:2, genre:"Детектив"}
    ];
    let bookslist = [
      {  id:0, authorID:0, name:"", pages:0, genre:""},
      {  id:1, authorID:1, name:"Атлант расправил плечи", pages:1364, genre:"Роман"},
      {  id:2, authorID:1,  name:"Идеал", pages:320, genre:"Роман"},
      {  id:3, authorID:1,  name:"Источник", pages:808, genre:"Роман"},
      {  id:4, authorID:2, name:"Цифровая крепость", pages:777, genre:"Роман"},
      {  id:5, authorID:3,  name:"Скандал в Богемии", pages:888, genre:"Детектив"}

    ];
    return {authors, genres, bookslist};
  };
}
