import { Component } from '@angular/core';
import { NewsService } from '../api/news.service';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false
})
export class Tab1Page {
  topHeadlines: any[] = [];

  constructor(private newsService: NewsService, private dataService: DataService, private router: Router) {
    newsService.getTopHeadlines().subscribe((results) => {
      this.topHeadlines = results.articles;
    });
  }

  getDetails(selectedArticle: any) {
    const params: NavigationExtras = {
      queryParams: {
        author: selectedArticle.author,
        content: selectedArticle.content,
        description: selectedArticle.description,
        publishedAt: selectedArticle.publishedAt,
        source: selectedArticle.source.name,
        title: selectedArticle.title,
        url: selectedArticle.url,
        urlToImage: selectedArticle.urlToImage,
      },
    };
    this.router.navigate(['/details'], params);
  }

  async addData(article: any) {
    await this.dataService.addData(article);
  }
}
