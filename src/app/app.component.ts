import { Component } from '@angular/core';
import { Router, Event, NavigationEnd, RouterEvent } from '@angular/router'; 
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'track-app-frontend';

  constructor(
    private router: Router, 
    private titleService: Title,
  ) {
    this.router.events.pipe(
      filter(e => e instanceof RouterEvent)
    ).subscribe((event: Event)=>{
      if(event instanceof NavigationEnd) {
        var title = this.getTitle(router.routerState, router.routerState.root).join('-');
        this.titleService.setTitle(this.title + title);
        this.preventBack();
      }
  });

  }

  getTitle(state, parent) {
    var data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }
    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  preventBack(){
    history.pushState(null, null, location.pathname);
    window.onpopstate = function () {
      history.go(1);
    };
  }
}
