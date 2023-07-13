import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <main>
        <a >
            <header class="brand-name">
                <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" [routerLink]="['/']">
                <ng-template #loginSection>
                    <div class="greeting">
                        <p>Please log in</p>
                        <button class="primary" type="button"
                        (click)="login()">Login</button>
                    </div>
                </ng-template>
                <div class="greeting" *ngIf="isLoggedIn; else loginSection">
                    <p>Welcome, {{ username }}!</p>
                    <button class="primary" type="button" 
                    (click)="logout()">Logout</button>
                </div>
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
  isLoggedIn: boolean = false;
  username: string = '';

  constructor(private router: Router){
    }

  login(): void {
    // Logic to handle login
    // this.isLoggedIn = true;
    // this.username = 'zhekai dong'; // Set the logged-in username
    this.router.navigate(["signin", ]);
  }

  logout(): void {
    // Logic to handle logout
    this.isLoggedIn = false;
    this.username = '';
    this.router.navigate(["/", "signin"]);
  }
}
