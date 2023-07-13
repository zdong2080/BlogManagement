import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogBrief } from '../blogbrief';

@Component({
    selector: 'app-blog-brief',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule
    ],
    template: `
  <section class="listing">
    <!-- <img class="listing-photo" [src]="blogBrief.photo" alt="Exterior photo of {{blogBrief.name}}"> -->
    <h2 class="listing-heading">{{ blogBrief.name }}</h2>
    <p class="listing-location">{{ blogBrief.city}}, {{blogBrief.state }}</p>
    <a [routerLink]="['/details', blogBrief.id]">Learn More</a>
    <!-- <button class="primary" type="button"
        (click)="deleteBlog(filter.value)">Search</button> -->
  </section>
  `,
    styleUrls: ['./blog-brief.component.css']
})
export class BlogBriefComponent {
    @Input() blogBrief!: BlogBrief;

    
}
