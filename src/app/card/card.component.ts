import { Component, OnInit, Input } from '@angular/core';
import { faCoffee, faAddressCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() user;
  faC = faCoffee;
  faS = faAddressCard;
  constructor() {}

  ngOnInit() {}
}
