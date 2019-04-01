import { Component, OnInit } from '@angular/core';
import { CustomElementLoaderService } from '../custom-element-loader.service';

@Component({
  selector: 'app-basehref-strategy',
  templateUrl: './basehref-strategy.component.html',
  styleUrls: ['./basehref-strategy.component.scss']
})
export class BasehrefStrategyComponent implements OnInit {

  constructor(private customElementLoader: CustomElementLoaderService) { }

  ngOnInit() {
    this.customElementLoader.loadScript('/static/basehref-strategy/bundle.js');
    this.customElementLoader.loadStyles('/static/basehref-strategy/bundle.css');
  }

}
