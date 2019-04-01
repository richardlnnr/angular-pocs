import { Component, OnInit } from '@angular/core';
import { PeopleServiceService } from '../people-service.service';

@Component({
  selector: 'app-people-dashboard',
  templateUrl: './people-dashboard.component.html',
  styleUrls: ['./people-dashboard.component.scss']
})
export class PeopleDashboardComponent implements OnInit {

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
