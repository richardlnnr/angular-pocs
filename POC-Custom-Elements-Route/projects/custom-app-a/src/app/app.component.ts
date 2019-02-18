import { Component } from '@angular/core';

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
}
