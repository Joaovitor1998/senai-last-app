import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-error-message',
  templateUrl: './form-error-message.component.html',
  styleUrls: ['./form-error-message.component.scss']
})
export class FormErrorMessageComponent implements OnInit {

  @Input() message!: string; 

  constructor() { }

  ngOnInit(): void {
  }

}
