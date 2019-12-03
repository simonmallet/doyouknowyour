import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-featured-message',
  templateUrl: './featured-message.component.html',
  styleUrls: ['./featured-message.component.scss']
})
export class FeaturedMessageComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
