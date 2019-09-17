import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../../interfaces/Car';
import { ConfigService } from '../../config.service';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
      private http: HttpClient,
      private configService: ConfigService
  ) { }

  getAllCars(): Observable<Car[]> {
    const response: Observable<Car[]> = this.http.get<Car[]>(`${this.configService.getBaseUrl()}/cars`);
    return response;
  }
}
