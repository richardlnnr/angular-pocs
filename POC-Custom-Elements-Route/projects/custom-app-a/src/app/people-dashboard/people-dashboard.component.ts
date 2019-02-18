import { Component } from '@angular/core';

@Component({
  selector: 'app-people-dashboard',
  templateUrl: './people-dashboard.component.html',
  styleUrls: ['./people-dashboard.component.scss']
})
export class PeopleDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  people =  [
    {
      name: 'Richard Lindner',
      job: 'Front-end Developer'
    },
    {
      name: 'John Doe',
      job: 'Front-end Developer'
    },
    {
      name: 'Avatar 2',
      job: 'Back-end Developer'
    }
  ];

  getAvatar(name: string): string {
    return `https://api.adorable.io/avatars/150/${name}.png`;
  }
}
