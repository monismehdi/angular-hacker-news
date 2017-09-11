import { HackerNewsApiService } from './../hacker-news-api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() itemID:number;
  item;

  constructor(private hackerNAPIS: HackerNewsApiService) { }

  ngOnInit() {
    this.hackerNAPIS.fetchItem(this.itemID).subscribe(data => {
      this.item = data;
    }, error => console.log('Could not load item' + this.itemID));
  }

}
