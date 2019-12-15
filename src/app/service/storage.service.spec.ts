import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageService = TestBed.get(StorageService);
    expect(service).toBeTruthy();
  });
  it('should return "test"', () => {
    const service: StorageService = TestBed.get(StorageService);
    const expectedValue = 'test';
    expect(service.get()).toEqual(expectedValue);
  });
  it('set value in localStorage', () => {
    const service: StorageService = TestBed.get(StorageService);
    const testKey = 'testKey';
    const testValue = 'value';
    service.set('test', 'test');
    expect(localStorage.getItem(testKey)).toEqual(testValue);
  });
});
