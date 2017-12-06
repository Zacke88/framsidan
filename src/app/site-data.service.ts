import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SiteDataService {

  // Observable string sources
  private displayFullSite = new BehaviorSubject<boolean>(false);
  private siteName = new BehaviorSubject<string>('Framsidan');

  // Observable string streams
  displayFull = this.displayFullSite.asObservable();
  name = this.siteName.asObservable();

  constructor() { }

  // Service message commands
  changeSiteName(name) {
    this.siteName.next(name);
  }
  changeDisplay(display: boolean) {
    this.displayFullSite.next(display);
  }
  
}
