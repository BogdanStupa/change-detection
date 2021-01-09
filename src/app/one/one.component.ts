import { ChangeDetectionStrategy, Component, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-one',
  template: `
        {{cdCheck()}}
        <a>Cmp1</a>
        <ul>
          <li>
              <app-two></app-two>
          </li>
          <li>
              <app-three></app-three>
          </li>
        </ul>
  `
})
export class OneComponent {
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