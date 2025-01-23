import { Component } from '@angular/core';
import { NewsService } from '../api/news.service';
import { NavigationExtras, Router } from '@angular/router';
import {DataService} from "../api/data.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
topHeadlines: any[] = []
listData: any[] = [];

  constructor(private newsService:NewsService,private dataService: DataService, private router:Router) {
    newsService.getTopHeadlines().subscribe((results) =>{
    
      this.topHeadlines.push(...results.articles)
      console.log(this.topHeadlines);
    })
  }

  getDetails(selectedArticle: any){
    const params :NavigationExtras ={
      queryParams:{
        'author': selectedArticle.author,
        'content': selectedArticle.content,
        'description': selectedArticle.description,
        'publishedAt': selectedArticle.publishedAt,
        'source': selectedArticle.source.name,
        'title': selectedArticle.title,
        'url': selectedArticle.url,
        'urlToImage': selectedArticle.urlToImage
      }
    }
    this.router.navigate(['/details'], params)
  }
  async loadData(){
    this.listData = await this.dataService.getData();
  }
  async removeItem(index: any){
    this.dataService.removeItem(index);
    this.listData.splice(index, 1);
  }
  ngOnInit() {
    this.loadData();

  }
}
