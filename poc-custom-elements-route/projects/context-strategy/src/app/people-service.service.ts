import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleServiceService {

  constructor() { }

  private people =  [
    {
      id: '1',
      name: 'Richard Lindner',
      job: 'Front-end Developer'
    },
    {
      id: '2',
      name: 'John Doe',
      job: 'Front-end Developer'
    },
    {
      id: '3',
      name: 'Avatar 2',
      job: 'Back-end Developer'
    }
  ];

  getPeople(): Observable<any[]> {
    return of(this.people);
  }

  getPerson(id: string): Observable<any> {
    return of(this.people.find(p => p.id === id));
  }

  getAvatar(name: string): string {
    return `https://api.adorable.io/avatars/150/${name}.png`;
  }
}
