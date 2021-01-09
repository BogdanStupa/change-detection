import { Component, ElementRef, NgZone } from '@angular/core';
@Component({
  selector: 'app-five',
  template: `
  {{cdCheck()}}
     <a>Cmp5</a>
  `,
  styles: [
  ]
})
export class FiveComponent {
  
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