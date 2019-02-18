import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks = [
    {
      label: 'People list',
      path: 'list'
    },
    {
      label: 'People dashboard',
      path: 'dashboard'
    }
  ];

  constructor(
    private router: Router
  ) {
    // Manually triggering initial navigation
    router.initialNavigation();
  }
}
