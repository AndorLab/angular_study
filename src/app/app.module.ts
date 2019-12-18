import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ProductsComponent } from './components/products/products.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { SettingComponent } from './components/home/setting/setting.component';
import { PlistComponent } from './components/products/plist/plist.component';
import { PcateComponent } from './components/products/pcate/pcate.component';

import { ProductModule } from './module/product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    ProductsComponent,
    NewscontentComponent,
    ProductDetailComponent,
    WelcomeComponent,
    SettingComponent,
    PlistComponent,
    PcateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
