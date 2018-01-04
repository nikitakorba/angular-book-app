import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetDataService} from '../get-data.service';
@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  routeId: number;
  private sub: any;
  categoryInfo;
  constructor(private route: ActivatedRoute, private getData: GetDataService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.routeId = +params['id'];
    });
    this.getData.getCategoryById(this.routeId).subscribe(val => {
      this.categoryInfo = val;
    });
  }

}
