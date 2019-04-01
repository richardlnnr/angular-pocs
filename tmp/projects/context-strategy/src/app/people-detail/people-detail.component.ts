import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PeopleServiceService } from '../people-service.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {

  personForm = this.fb.group({
    name: [null, Validators.required],
    jobRole: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private poepleService: PeopleServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('personId');
      this.poepleService.getPerson(id).subscribe((person) => {
        this.personForm.setValue({
          name: person.name,
          jobRole: person.job
        });
      });
    });
  }

  onSubmit() {
  }

  onReturn() {
    this.location.back();
  }
}
