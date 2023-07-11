import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogBriefComponent } from '../blog-brief/blog-brief.component';
import { BlogBrief } from '../blogbrief';

import { BlogingService } from '../bloging.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        BlogBriefComponent,
    ],
    styleUrls: ['./home.component.css'],
    template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button"
        (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-blog-brief
        *ngFor="let blogBrief of filteredBlogList" 
        [blogBrief]="blogBrief"></app-blog-brief>
    </section>
    `,
})
export class HomeComponent {
    blogBriefList:BlogBrief[] = [];
    blogingService: BlogingService = inject(BlogingService);
    filteredBlogList: BlogBrief[] = [];

    constructor() {
        this.blogingService.getAllBlogBriefs().then((blogBriefList: BlogBrief[]) => {
            this.blogBriefList = blogBriefList;
            this.filteredBlogList = blogBriefList;
          });
    }

    filterResults(text: string) {
        if (!text) {
          this.filteredBlogList = this.blogBriefList;
        }
      
        this.filteredBlogList = this.blogBriefList.filter(
          blogBrief => blogBrief?.city.toLowerCase().includes(text.toLowerCase())
        );
      }
}
