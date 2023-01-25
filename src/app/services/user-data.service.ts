import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  userData() {

    return [
      {
        "id": 1,
        "name": "John",
        "age": 25,
      },
      {
        "id": 2,
        "name": "Luther",
        "age": 28,
      },
      {
        "id": 3,
        "name": "John",
        "age": 29,
      },
    ]
  }
}
