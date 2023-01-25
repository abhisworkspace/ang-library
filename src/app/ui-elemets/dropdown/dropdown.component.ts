import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  dropdownData = [
    {
      id: 0,
      name: 'Database 1',
    },
    {
      id: 1,
      name: 'Database 2',
    },
    {
      id: 2,
      name: 'Database 3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  getDropdownValue(ev: any) {
    console.log(ev);
  }
}
