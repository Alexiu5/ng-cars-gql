import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnviromentService {
  // tslint:disable-next-line: ban-types
  enviroment: Object;

  constructor() {
    this.enviroment = environment;
  }

  getValue(key: string) {
    return this.enviroment[key];
  }
}
