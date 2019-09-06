import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-owners',
  templateUrl: './card-owners.component.html',
  styleUrls: ['./card-owners.component.sass']
})
export class CardOwnersComponent implements OnInit {

  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }

}
