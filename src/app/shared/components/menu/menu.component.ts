import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  canShowContent : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMenuContent(canShow: boolean) {
    this.canShowContent = canShow;
  }

}
