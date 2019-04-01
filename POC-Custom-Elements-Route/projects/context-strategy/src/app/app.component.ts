import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Input()
  routerContext: string;

  navLinks;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.navLinks = [
      {
        label: 'People list',
        path: `${this.routerContext}/list`
      },
      {
        label: 'People dashboard',
        path: `${this.routerContext}/dashboard`
      }
    ];

    // Manually triggering initial navigation
    this.router.initialNavigation();
  }

}
