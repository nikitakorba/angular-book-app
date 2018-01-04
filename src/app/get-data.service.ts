import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GetDataService {
  constructor(private http: Http) {
  }
  getBooks() {
    const apiUrl = './assets/books.json';
    return this.http.get(apiUrl)
      .map( (response: Response) => {
        return response.json(); } );
  }
  getAuthors() {
    const apiUrl = './assets/authors.json';
    return this.http.get(apiUrl)
      .map( (response: Response) => {
        return response.json(); } );
  }
  getBookById(id) {
    const apiUrl = './assets/books.json';
    return this.http.get(apiUrl)
      .map(res => res.json().find(book => book.id === id));
  }
  getAuthorById(id) {
    const apiUrl = './assets/authors.json';
    return this.http.get(apiUrl)
      .map(res => res.json().find(author => author.id === id));
  }
  getCategoryById(id) {
    const apiUrl = './assets/books.json';
    return this.http.get(apiUrl)
      .map(res => res.json().filter(book => book.categoryId === id));
  }
  }
