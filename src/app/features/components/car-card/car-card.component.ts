import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/core/interfaces/Car';

@Component({
  selector: 'app-car-card',
  template: `
      <div class="card">
        <div class="card-image-container">
          <div class="card-image" [ngStyle]="{'background-image': getUrlBackground(car.imageUrl)}"></div>
        </div>

        <div class="card-content">
          <h4 class="sub-years">{{car.brand}} {{car.title}} <figcaption id="separator"></figcaption>  {{car.age}} years old</h4>
          <h2>Tesla - XSTR</h2>
          <p>This is a sample</p>
        </div>

      </div>
  `,
  styleUrls: ['./car-card.component.sass']
})

export class CarCardComponent implements OnInit {
  @Input() car: Car;

  constructor() { }

  ngOnInit() {
  }


  getUrlBackground(url: string): string {
    return `url(${url})`;
  }
}
