import { Injectable } from '@angular/core';
import { EnviromentService } from './enviroment.service';

@Injectable()
export class ConfigService {
  config = {
    baseUrl: ''
  };

  constructor(private enviromentService: EnviromentService) {
    this.config.baseUrl = this.enviromentService.getValue('apiRoot');
   }

  getBaseUrl() {
    return this.config.baseUrl;
  }
}
