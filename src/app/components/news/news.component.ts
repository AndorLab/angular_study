import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @ViewChild('myNews', { static: true, }) myNews: ElementRef;
  @ViewChild('header', { static: true, }) header: any;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    console.log(this.myNews.nativeElement);
  }

  executeChildRun(evt) {
    this.header.run(evt);
  }

}
