import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {appRouting} from './app.routing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BookListComponent } from './book-list/book-list.component';
import {CollapseModule} from 'ngx-bootstrap';
import { AuthorListComponent } from './author-list/author-list.component';
import {GetDataService} from './get-data.service';
import {HttpModule} from '@angular/http';
import { HomeComponentComponent } from './home-component/home-component.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BookListComponent,
    AuthorListComponent,
    HomeComponentComponent,
    BookDetailsComponent,
    AuthorDetailsComponent,
    CategoryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    appRouting,
    CollapseModule,
    HttpModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
