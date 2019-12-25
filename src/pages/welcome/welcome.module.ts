import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import {ProductsPage} from '../products/products'
import { WelcomePage } from './welcome';

@NgModule({
  declarations: [
    WelcomePage
    
  ],
  imports: [
    IonicPageModule.forChild(WelcomePage),
    TranslateModule.forChild()
    
  ],
  exports: [
    WelcomePage
    
  ]
})
export class WelcomePageModule { }
