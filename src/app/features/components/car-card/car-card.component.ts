import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-card',
  template: `
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{{id}}</h4>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique sunt possimus?</p>
        </div>
      </div>
  `,
  styleUrls: ['./car-card.component.sass']
})
export class CarCardComponent implements OnInit {
  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }

}
