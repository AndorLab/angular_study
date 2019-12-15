import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title = '父组件的标题';
  constructor() { }

  ngOnInit() {
  }

  run() {
    alert('test from father');
  }

  messageFromChild(evt) {
    console.log(evt);
  }

}
