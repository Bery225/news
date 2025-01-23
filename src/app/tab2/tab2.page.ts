import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from "../api/data.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false
})
export class Tab2Page {
  listData: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.dataService.data$.subscribe((data) => {
      this.listData = data;
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
        urlToImage: selectedArticle.urlToImage
      }
    };
    this.router.navigate(['/details'], params);
  }

  async removeItem(index: number) {
    await this.dataService.removeItem(index);
  }
}
