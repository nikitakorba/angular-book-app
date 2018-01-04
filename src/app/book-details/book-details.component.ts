import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetDataService} from '../get-data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  routeId: number;
  private sub: any;
  bookInfo;
  constructor(private route: ActivatedRoute, private getData: GetDataService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.routeId = +params['id'];
    });
    this.getData.getBookById(this.routeId).subscribe(val => {this.bookInfo = val; });
  }
}
