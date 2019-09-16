import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/core/interfaces/Car';

@Component({
  selector: 'app-car-card',
  template: `
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{{car | json}}</h4>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique sunt possimus?</p>
        </div>
      </div>
  `,
  styleUrls: ['./car-card.component.sass']
})
export class CarCardComponent implements OnInit {
  @Input() car: Observable<Car>;

  constructor() { }

  ngOnInit() {
  }

}
