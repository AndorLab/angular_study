import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  testTitle = 'test Header';

  arrs: string[] = ['1', '2', '3', '4'];
  arrObj = [{
    name: 'test',
    age: 12,
  }, {
    name: 'lisi',
    age: 23,
  }];
  cars = [
  {
    cate: '宝马',
    list: [
      {
        title: '宝马1',
        price: 30,
      },
      {
        title: '宝马2',
        price: 33,
      },
      {
        title: '宝马4',
        price: 40,
      },
    ]
  },
  {
    cate: '奥迪',
    list: [
      {
        title: '奥迪1',
        price: 30,
      },
      {
        title: '奥迪2',
        price: 33,
      },
      {
        title: '奥迪4',
        price: 40,
      },
    ]
  },

  ];
  today = new Date();

  @Input() title: any;
  @Input() method: any;
  @Output() outEmitter = new EventEmitter();
  constructor() { }


  ngOnInit() {
  }
  click() {
    this.testTitle = '改变后的数据';
  }
  handleInput(evt) {
    if (evt.keyCode === 13) {
      this.testTitle = evt.target.value;
    } else {
      console.log(evt);
    }

  }

  run(evt) {
    console.log('执行run');
    console.log(evt);
    this.outEmitter.emit('这是从子组件里传过来的值');
  }

  executeMethodFromFather() {
    this.method();
  }



}
