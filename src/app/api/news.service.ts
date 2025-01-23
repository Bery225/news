import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { 

  }

  getTopHeadlines():Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}top-headlines?country=us&apiKey=${environment.apiKey}`)
  }
}
