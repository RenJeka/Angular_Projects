import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

/**
 * Директива работает точно также, как и "*ngFor", только кол-во элементов можно передавать простым числом (как аргумент
 * директивы). Т.е. директива выводит столько элементов, какое число переданно в параметре.
 */
@Directive({
  selector: '[ngForWithNumbers]'
})
export class NgForWithNumbersDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input('ngForWithNumbers') set duplicateElements(numberOfDuplicates: number) {
    this.viewContainer.clear();
    for(let i=0; i < numberOfDuplicates; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
