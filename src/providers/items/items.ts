import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class Items {
  apiUrl = 'https://5bcce576cf2e850013874767.mockapi.io/task/categories';
  constructor(public http: HttpClient) { }
  getProducts() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


}
