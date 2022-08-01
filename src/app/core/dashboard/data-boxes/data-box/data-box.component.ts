import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-box',
  templateUrl: './data-box.component.html',
  styleUrls: ['./data-box.component.scss']
})
export class DataBoxComponent implements OnInit {

  @Input() dataTitle !: string;

  @Input() dataValue !: string | number;

  constructor() { }

  ngOnInit() {
  }

}
