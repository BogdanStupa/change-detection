import { ChangeDetectionStrategy, Component, ElementRef, NgZone, OnInit } from '@angular/core';


@Component({
  selector: 'app-nine',
  template: `
  {{cdCheck()}}
     <a>Cmp9</a>
  `,
  styles: [
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NineComponent {

  constructor(
    private el: ElementRef,
    private ngZone: NgZone
  ) { 
    // interval(1000).subscribe(x => console.log(x));
  }

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