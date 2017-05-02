import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {
title: string;
value: string;
strategy: string;
  constructor() { }

  ngOnInit() {
    this.title = 'my form';
    this.value = 'my value';
    this.strategy  = 'my strategy';
  }

}
