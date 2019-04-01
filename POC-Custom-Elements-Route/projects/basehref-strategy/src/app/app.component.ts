import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  navLinks;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.navLinks = [
      {
        label: 'People list',
        path: '/list'
      },
      {
        label: 'People dashboard',
        path: '/dashboard'
      }
    ];

    // Manually triggering initial navigation
    this.router.initialNavigation();
  }

}
