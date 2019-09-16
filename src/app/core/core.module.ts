import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from './services/car/car.service';
import { ConfigService } from './config.service';
import { EnviromentService } from './enviroment.service';



@NgModule({
  declarations: [
//     CarService,
//     ConfigService,
//     EnviromentService
  ],
  imports: [
    CommonModule
  ],
  providers: [
//     CarService,
//     EnviromentService,
//     ConfigService
  ]
})
export class CoreModule { }
