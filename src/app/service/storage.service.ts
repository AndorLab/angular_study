import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  constructor() { }
  get(key: string) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }
  remove(key: string) {
    localStorage.removeItem(key);
  }

  getRxJsData() {
    return new Observable(observe => {
      setTimeout(() => {
        observe.next('Data from rxjs');
      }, 1000);
    });
  }

  getRxDataInterval() {
    return new Observable(observe => {
      let count = 0;
      setInterval(() => {
        count++;
        observe.next(count);
      }, 1000);
    });
  }
}
