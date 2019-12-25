import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApiProductsPage } from './api-products';


@NgModule({
  declarations: [
    ApiProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(ApiProductsPage),
  ],
  exports: [
    ApiProductsPage
  ]
})
export class ApiProductsPageModule {}
