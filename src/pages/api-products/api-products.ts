import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the ApiProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-api-products',
  templateUrl: 'api-products.html',
})
export class ApiProductsPage {
  products;
  img_url;

  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient: HttpClient) {
    var recieveData=this.navParams.get('id');
    let apiRoot="https://5bcce576cf2e850013874767.mockapi.io/task/categories"
    let url = `${apiRoot}/${recieveData}`;
    this.products=this.httpClient.get(url);
    this.products
    .subscribe(data => {
      console.log('my data: ', data);
      this.img_url=data.category_img;
    })
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ApiProductsPage');
  }

}
