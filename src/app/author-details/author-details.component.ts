import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../get-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  routeId: number;
  private sub: any;
  authorInfo;
  constructor(private route: ActivatedRoute, private getData: GetDataService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.routeId = +params['id'];
    });
    this.getData.getAuthorById(this.routeId).subscribe(val => {
      this.authorInfo = val;
    });
  }
}
