import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
  ],
  styleUrls: ['./app.component.css'],
  template: `
    <main>
        <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </header>
        <section class="content">
            <app-home></app-home>
        </section>
    </main>
  `,
})
export class AppComponent {
  title = 'blog-management';
}
