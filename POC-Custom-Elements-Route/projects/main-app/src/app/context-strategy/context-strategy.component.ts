import { Component, OnInit } from '@angular/core';
import { CustomElementLoaderService } from '../custom-element-loader.service';

@Component({
  selector: 'app-context-strategy',
  templateUrl: './context-strategy.component.html',
  styleUrls: ['./context-strategy.component.scss']
})
export class ContextStrategyComponent implements OnInit {

  constructor(private customElementLoader: CustomElementLoaderService) { }

  ngOnInit() {
    this.customElementLoader.loadScript('/static/context-strategy/bundle.js');
    this.customElementLoader.loadStyles('/static/context-strategy/bundle.css');
  }

}
