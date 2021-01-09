import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { FirstService } from '../services/first.service';

@Component({
  selector: 'app-three',
  template: `
  {{cdCheck()}}
            <a>Cmp3</a>
          
<ul>
    <li>
        <app-six></app-six>
    </li>
    <li>
        <app-seven></app-seven>
    </li>
</ul>
  `,
  styles: [
  ],
  providers:[
    FirstService
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreeComponent implements OnInit, OnDestroy {
  constructor(
    private el: ElementRef,
    private ngZone: NgZone,
    public fs: FirstService
  ) { }

  ngOnInit() {}

  ngOnDestroy(){}

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