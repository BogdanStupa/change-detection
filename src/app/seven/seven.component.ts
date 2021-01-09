import { ChangeDetectionStrategy, Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-seven',
  template: `
  {{cdCheck()}}
     <a>Cmp7</a>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SevenComponent {

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