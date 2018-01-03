import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../get-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  data;
  result: Array<Object>;
  constructor(private getData: GetDataService) {
  }

  ngOnInit() {
    this.data = this.getData.getBooks().subscribe(val => this.result = val);
  }

}
