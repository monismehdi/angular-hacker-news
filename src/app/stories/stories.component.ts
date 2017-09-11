import { Observable } from 'rxjs/Observable';

import { HackerNewsApiService } from '../hacker-news-api.service';
import { ItemComponent } from './../item/item.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  // items: Number[];
  items;

  constructor(private hackerNAPIS: HackerNewsApiService) {
    // this.items= Array(45);
   }

  ngOnInit() {
    this.hackerNAPIS.fetchStories()
      .subscribe(
        items => this.items = items,
        error => console.log('Error fetching stories'));
      
  }

}
