import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { BlogingService } from '../bloging.service';
import { BlogBrief } from '../blogbrief';



@Component({
    selector: 'app-details',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    template: `
  <article>
    <img class="listing-photo" [src]="blogBrief?.photo"
      alt="Exterior photo of {{blogBrief?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{blogBrief?.name}}</h2>
      <p class="listing-location">{{blogBrief?.city}}, {{blogBrief?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{blogBrief?.availableUnits}}</li>
        <li>Does this location have wifi: {{blogBrief?.wifi}}</li>
        <li>Does this location have laundry: {{blogBrief?.laundry}}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  </article>
`,
    styleUrls: ['./details.component.css']
})
export class DetailsComponent {
    route: ActivatedRoute = inject(ActivatedRoute);
    blogingService = inject(BlogingService);
    blogBrief: BlogBrief | undefined;

    applyForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl('')
    });

    constructor() {
        const blogBriefId = parseInt(this.route.snapshot.params['id'], 10);
        this.blogingService.getBlogBriefById(blogBriefId).then(blogBrief => {
            this.blogBrief = blogBrief;
        });
    }

    submitApplication() {
        this.blogingService.submitApplication(
          this.applyForm.value.firstName ?? '',
          this.applyForm.value.lastName ?? '',
          this.applyForm.value.email ?? ''
        );
    }
}
