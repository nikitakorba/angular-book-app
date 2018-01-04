import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import {BookListComponent} from './book-list/book-list.component';
import {AuthorListComponent} from './author-list/author-list.component';
import {HomeComponentComponent} from './home-component/home-component.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {AuthorDetailsComponent} from './author-details/author-details.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'booklist', children: [
    {path: '', component: BookListComponent},
    {path: ':id', component: BookDetailsComponent}
  ]},
  {path: 'authorlist', children: [
    {path: '', component: AuthorListComponent},
    {path: ':id', component: AuthorDetailsComponent}
  ]}
];

export  const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);


