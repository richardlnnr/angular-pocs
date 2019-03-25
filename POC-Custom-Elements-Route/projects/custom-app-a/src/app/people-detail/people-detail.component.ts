import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PeopleServiceService } from '../people-service.service';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('personId');
      this.poepleService.getPerson(id).subscribe((person) => {
        console.log('Detail', person);
        this.personForm.setValue({
          name: person.name,
          jobRole: person.job
        });
      });
    });
    // if (this.name) {
    //   this.personForm.setValue({
    //     name: this.name
    //   });
    // }

    // if (this.jobRole) {
    //   this.personForm.setValue({
    //     jobRole: this.jobRole
    //   });
    // }
  }

  onSubmit() {
  }
}
