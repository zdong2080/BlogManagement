import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
],
  styleUrls: ['./home.component.css'],
  template: `
    <section>
        <form>
        <input type="text" placeholder="Filter by blog name">
        <button class="primary" type="button">Search</button>
        </form>
    </section>
  `,
})
export class HomeComponent {

}
