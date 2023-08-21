import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string;
  imgSrc: string;

  constructor() {
    this.title = 'Runners';
    this.imgSrc =
      'https://www.nih.gov/sites/default/files/news-events/research-matters/2019/20190723-running.jpg';
  }
}
