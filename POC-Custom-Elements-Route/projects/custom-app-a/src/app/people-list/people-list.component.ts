import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  people: any[];

  constructor() { }

  ngOnInit() {
    this.people = [
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
  }

  getAvatar(name: string): string {
    return `https://api.adorable.io/avatars/150/${name}.png`;
  }

}
