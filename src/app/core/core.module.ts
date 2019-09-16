import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from './services/car/car.service';
import { ConfigService } from './config.service';
import { EnviromentService } from './enviroment.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CarService,
    EnviromentService,
    ConfigService
  ]
})
export class CoreModule { }
