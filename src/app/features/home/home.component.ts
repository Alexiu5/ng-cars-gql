import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { Car } from 'src/app/core/interfaces/Car';
import { CarService } from 'src/app/core/services/car/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public items = [
    {
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique sunt possimus?'
    },
    {
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique sunt possimus?'
    },
    {
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique sunt possimus?'
    },
    {
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique sunt possimus?'
    },
    {
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique sunt possimus?'
    },
    {
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique sunt possimus?'
    },
    {
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique sunt possimus?'
    },
    {
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique sunt possimus?'
    },
    {
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique sunt possimus?'
  }];

  public cars$: Observable<Car[]>;
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.cars$ = this.carService.getAllCars();
  }

}
