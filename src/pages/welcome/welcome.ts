import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,NavOptions } from 'ionic-angular';
import { ApiProductsPage} from '../api-products/api-products';



/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  constructor(public navCtrl: NavController,public navParam: NavParams) {

  }
  products=5;
  goToproducts($event){
    
    this.navCtrl.push(ApiProductsPage, {
      'id': $event.target.id
      
      }); 
      
}
}
  
  
