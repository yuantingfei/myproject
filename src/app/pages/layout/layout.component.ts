import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  tabs = [
    {
      active: true,
      name: 'Tab 1',
      icon: 'anticon anticon-apple'
    },
    {
      active: false,
      name: 'Tab 2',
      icon: 'anticon anticon-android'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
