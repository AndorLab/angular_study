import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToDetail() {
    this.router.navigate(['/products/', '123']);
  }

  goToParams() {
    const ext: NavigationExtras = {
      queryParams: {
        pid: 'test',
        test: 'json'
      },
      fragment: 'anchor'
    };
    this.router.navigate(['/products/'], ext);
  }

}
