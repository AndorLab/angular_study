import { Injectable } from '@angular/core';

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
}
