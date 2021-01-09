
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, NgZone, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-two',
  template: `
  {{cdCheck()}}
          <a>Cmp2
          
          <br><h6 (click)="cd.detectChanges()">[detectChanges()]</h6>
          <br><h6 (click)="cd.markForCheck()">[markForCheck()]</h6>
          <br><h6 (click)="cd.detach()">[detach()]</h6>
          <br><h6 (click)="cd.reattach()">[reattach()]</h6>
          <br><button (click)="onClick()">Simple button</button>
          <br><input (focus)="onF()" (keydown.enter)="onClick()" (focusout)="onFout()" (input)="onClick()" type="text"/>
          </a>
<ul>
    <li>
        <app-four></app-four>
    </li>
    <li>
        <app-five></app-five>
    </li>
</ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoComponent {

  constructor(
    private el: ElementRef,
    private ngZone: NgZone,
    public cd: ChangeDetectorRef
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

  onClick(){
    console.log("Clicked");
  }

  onF(){
    this.cd.detach();
  }
  onFout(){
    this.cd.reattach();
  }
}