import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {appRouting} from './app.routing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BookListComponent } from './book-list/book-list.component';
import {CollapseModule} from 'ngx-bootstrap';
import { AuthorListComponent } from './author-list/author-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BookListComponent,
    AuthorListComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    CollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
