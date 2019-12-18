import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ProductsComponent } from './components/products/products.component';

import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { SettingComponent } from './components/home/setting/setting.component';

import { PlistComponent } from './components/products/plist/plist.component';
import { PcateComponent } from './components/products/pcate/pcate.component';
const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'welcome', component: WelcomeComponent,
      },
      {
        path: 'setting', component: SettingComponent,
      },
      {
        path: '**',
        redirectTo: 'welcome'
      },
    ]
  },
  {
    path: 'news', component: NewsComponent,
  },
  {
    path: 'newsContent/:aid', component: NewscontentComponent,
  },
  {
    path: 'products', component: ProductsComponent,
    children: [
      {
        path: 'list', component: PlistComponent,
      },
      {
        path: 'cate', component: PcateComponent,
      },
      {
        path: '**',
        redirectTo: 'list'
      },
    ]
  },
  {
    path: 'products/:pid', component: ProductDetailComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
