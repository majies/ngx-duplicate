import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

class NgDuplicateContext {
  count!: number;
  first!: boolean;
  last!: boolean;
  even!: boolean;
  odd!: boolean;

  constructor(count: number, first: boolean, last: boolean, even: boolean, odd: boolean) {
    this.count = count;
    this.first = first;
    this.last = last;
    this.even = even;
    this.odd = odd;
  }
}

@Directive({
  selector: '[ngxDuplicate]',
  standalone: true
})
export class NgxDuplicateDirective {

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input('ngxDuplicate') set count(value: number) {
    this.viewContainerRef.clear();
    for(let i = 1; i <= value; i++) {
      const context = this.createContext(i, value);
      this.viewContainerRef.createEmbeddedView(this.templateRef, context);
    }
  }

  private createContext(index: number, count: number) {
    const first = index === 1;
    const last = index === count;
    const even = index % 2 === 0;
    const odd = index % 2 === 1;

    return new NgDuplicateContext(index, first, last, even, odd);
  }

  static ngTemplateContextGuard(
    directive: NgxDuplicateDirective,
    context: unknown
  ): context is NgDuplicateContext { return true }
}
