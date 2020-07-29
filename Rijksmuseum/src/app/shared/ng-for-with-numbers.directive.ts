import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

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
