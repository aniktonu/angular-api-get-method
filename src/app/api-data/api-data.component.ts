import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})

export class ApiDataComponent {

  apiData: any;

  constructor(
    private api: ApiServiceService
  ) {
    this.api.getApiData().subscribe((data) => {

      console.log(data)
      this.apiData = data;
      console.log(this.apiData)
    })
  }
}
