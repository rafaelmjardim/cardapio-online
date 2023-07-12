import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from "@angular/cdk/layout";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileUtilsService {

  breakpoints = Breakpoints;
  currentBreakpoint: string = '';

  breakpoint$!: any;

  mobileResolution = new BehaviorSubject<boolean>(false);

  constructor(private breakpointObserver: BreakpointObserver) { }

  onInitBreakpoint = () => {
    this.breakpointObserver.observe(['(max-width: 640px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.mobileResolution.next(true);
      }else {
        this.mobileResolution.next(false);
      }
    })
  }


  

}
