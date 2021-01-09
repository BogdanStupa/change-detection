import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { filter, first, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
<div>
    <button (click)="app.tick()">Trigger Change Detection</button>
</div>
<div class="tree">
    <ul>
        <li>
            <app-one></app-one>
        </li>
        <li>
            <app-nine></app-nine>
        </li>
        <li>
            <app-nine></app-nine>
        </li>
    </ul>
</div>
<div style="margin-bottom: 5em; clear: both;"></div>
    
  `,
  styles: [],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(public app: ApplicationRef) { 
  
  }

}