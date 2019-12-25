import { NgModule } from '@angular/core';
import  {Items} from '../../providers/items/items';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  products:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public items:Items) {
    
  }

  }


