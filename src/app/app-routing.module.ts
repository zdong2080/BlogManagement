import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { LoginComponent } from './login/login.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

const routes: Routes = [
    { path: 'main', component: AppComponent },
    { path: 'mainheader', component: MainHeaderComponent },
    { path: 'login', component: LoginComponent },
    { path: 'blog-page', component: BlogPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
