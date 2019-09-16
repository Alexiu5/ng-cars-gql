import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
