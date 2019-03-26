import { Component, OnInit } from '@angular/core';
import { PeopleServiceService } from '../people-service.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  people: any[];

  constructor(private poepleService: PeopleServiceService) { }

  ngOnInit() {
    this.poepleService.getPeople().subscribe((people) => {
      this.people = people;
    });
  }

  getAvatar(name: string): string {
    return this.poepleService.getAvatar(name);
  }

}
