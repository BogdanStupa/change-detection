
import { Component, ElementRef, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-six',
  template: `
  {{cdCheck()}}
     <a>Cmp6</a>
  `,
  styles: [
  ]
})
export class SixComponent {

  constructor(
    private el: ElementRef,
    private ngZone: NgZone
  ) { }

  cdCheck() {
    this.ngZone.runOutsideAngular(() => {
      const a = this.el.nativeElement.querySelector('a');
      a.classList.add("checked");
      setTimeout(() => {
          a.classList.remove("checked");
      }, 500);
    });
  }
}