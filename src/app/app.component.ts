import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  rootElement: any;
  ngOnInit() {
    this.rootElement = document.documentElement;
    // this.rootElement.setAttribute('data-theme', 'light');
    this.rootElement.setAttribute('data-bs-theme', 'light');
  }

  switchTheme(ev: any) {
    this.rootElement = document.documentElement;
    // let checkExist = this.rootElement.getAttribute('data-theme');
    let checkExist = this.rootElement.getAttribute('data-bs-theme');
    if (checkExist == 'light') {
      // this.rootElement.setAttribute('data-theme', 'dark');
      this.rootElement.setAttribute('data-bs-theme', 'dark');
    } else {
      // this.rootElement.setAttribute('data-theme', 'light');
      this.rootElement.setAttribute('data-bs-theme', 'light');
    }
  }
}
