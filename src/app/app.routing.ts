import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import {BookListComponent} from './book-list/book-list.component';
import {AuthorListComponent} from './author-list/author-list.component';
import {HomeComponentComponent} from './home-component/home-component.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'booklist', component: BookListComponent},
  {path: 'authorlist', component: AuthorListComponent}
];

export  const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);


