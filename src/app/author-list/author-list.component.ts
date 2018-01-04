import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../get-data.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  constructor(private getData: GetDataService) { }
  authorInfo: object[] = [];
  ngOnInit() {
    this.getData.getAuthors().subscribe(val => {
      this.authorInfo = val;
    });

  }

}
