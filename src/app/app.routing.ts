import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import {BookListComponent} from './book-list/book-list.component';
import {AuthorListComponent} from './author-list/author-list.component';

const appRoutes: Routes = [
  {path: 'booklist', component: BookListComponent},
  {path: 'authorlist', component: AuthorListComponent}
];

export  const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);


