import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private delayTime = 100; // Temps de délai en millisecondes (20 secondes)

  loading$ = this.loadingSubject.asObservable();

  show() {
    this.loadingSubject.next(true);
  }

  hide() {
    setTimeout(() => {
      this.loadingSubject.next(false);
    }, this.delayTime);
  }
}
