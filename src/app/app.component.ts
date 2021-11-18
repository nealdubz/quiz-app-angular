import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  loading;
    constructor() {
        this.loading = true;
    }
    
    ngAfterViewInit() {
      setTimeout(()=>{
        this.loading = false;
      }, 2000);

    }
}
