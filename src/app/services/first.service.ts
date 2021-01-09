import { ChangeDetectorRef, Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class FirstService {

  count$: BehaviorSubject<number> = new BehaviorSubject(0);
  private z: number;
  get c() { return this.count$ }
  
  constructor(
    private ngZone: NgZone,
    private cd: ChangeDetectorRef
  ) {
    interval(1000).subscribe(x => {
      console.log(x);
    });
  }

}
