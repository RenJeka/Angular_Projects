import { Component, OnInit } from '@angular/core';
import {interval, Subscription, Observable, Subject} from 'rxjs'
import {map, filter, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent  {

  sub: Subscription

  stream$: Subject<number> = new Subject<number>()

  counter = 0

  constructor() {

    // const intervalStream$ = interval(1000)

    // this.sub = intervalStream$
    // .pipe(
    //   filter(value => value % 2 === 0),
    //   map(value => `Mapped value ${value}`)
    // )
    // .subscribe((value) => {
    //   console.log(value);
    // })
    //============ Observable =====================

    // const stream$ = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next(1)
    //   }, 1500)

    //   setTimeout(() => {
    //     observer.complete()
    //   }, 2100)

    //   setTimeout(() => {
    //     observer.error('Somethink went wrong')
    //   }, 2000)

    //   setTimeout(() => {
    //     observer.next(2)
    //   }, 2500)
    // })

    // stream$
    // .subscribe(
    //   value => console.log('Next:', value),
    //   error => console.log('Error: ', error),
    //   () => console.log('Complete')
    //)

    //============ Subject =====================

    this.sub = this.stream$.subscribe((value) => {
      console.log('Subscribe: ', this.counter);
    })
  }

  stopInterval(){
    this.sub.unsubscribe();
  }

  next() {
    this.counter++
    this.stream$.next()
  }
}
