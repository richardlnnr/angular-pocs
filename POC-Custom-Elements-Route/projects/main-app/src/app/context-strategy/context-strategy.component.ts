import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-context-strategy',
  templateUrl: './context-strategy.component.html',
  styleUrls: ['./context-strategy.component.scss']
})
export class ContextStrategyComponent implements OnInit {

  context = 'context-strategy';

  constructor() { }

  ngOnInit() {
  }

}
