import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

const STORAGE_KEY = "mylist";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<any[]>([]);
  data$ = this.dataSubject.asObservable();

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    this.loadStoredData();
  }

  async loadStoredData() {
    const storedData = (await this.storage.get(STORAGE_KEY)) || [];
    this.dataSubject.next(storedData);
  }

  async getData(): Promise<any[]> {
    return (await this.storage.get(STORAGE_KEY)) || [];
  }

  async addData(item: any) {
    const storedData = await this.getData();
    storedData.push(item);
    await this.storage.set(STORAGE_KEY, storedData);
    this.dataSubject.next(storedData);  
  }

  async removeItem(index: number) {
    const storedData = await this.getData();
    storedData.splice(index, 1);
    await this.storage.set(STORAGE_KEY, storedData);
    this.dataSubject.next(storedData);  
  }
}
