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
        <a [routerLink]="['/']">
            <header class="brand-name">
                <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
            </header>
        </a>
        <section class="content">
            <router-outlet></router-outlet>
        </section>
    </main>
  `,
})
export class AppComponent {
  title = 'blog-management';
}
