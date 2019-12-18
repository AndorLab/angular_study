import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {

  public newsList: string[] = [];
  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 10; i++) {
      this.newsList.push(`test-${i}`);
    }
  }

}
