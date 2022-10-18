import { Component, OnInit } from '@angular/core';
import * as data from '../../json/data.json';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  dataJson: any;
  constructor() {}

  ngOnInit(): void {
    this.dataJson = data;
  }
}
