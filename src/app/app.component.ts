import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  rootElement: any;
  isOpen = true;
  active = true;

  navigation = [
    {
      id: 0,
      name: 'Button',
      path: '/button',
    },
    {
      id: 1,
      name: 'Checkbox',
      path: '/checkbox',
    },
    {
      id: 2,
      name: 'Dropdown',
      path: '/dropdown',
    },
  ];

  ngOnInit() {
    this.rootElement = document.documentElement;
    this.rootElement.setAttribute('data-bs-theme', 'light');
  }

  toggleSidebar(ev: any) {
    this.active = !this.active;
    this.isOpen = !this.isOpen;
  }

  switchTheme(ev: any) {
    this.rootElement = document.documentElement;
    let checkExist = this.rootElement.getAttribute('data-bs-theme');
    if (checkExist == 'light') {
      this.rootElement.setAttribute('data-bs-theme', 'dark');
    } else {
      this.rootElement.setAttribute('data-bs-theme', 'light');
    }
  }
}
