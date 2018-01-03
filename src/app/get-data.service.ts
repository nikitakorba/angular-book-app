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
        const data = response.json();
        return data; } );
  }
  getAuthors() {
    const apiUrl = './assets/authors.json';
    return this.http.get(apiUrl)
      .map( (response: Response) => {
        const data = response.json();
        return data; } );
  }
  }
