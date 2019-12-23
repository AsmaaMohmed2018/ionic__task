import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';
import  {Items} from '../../providers/items/items';
import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';
  products:any;

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform,public items:Items) {
    console.log('ok');
    this.getProducts();
    this.dir = platform.dir();
    
        this.slides = [
          {
            title: "From Farm direct",
            description: "We get the food from farm fresh and good",
            image: 'assets/img/ica-slidebox-img-1.jpg',
          },
          {
            title: "Filtration to choose the best ",
            description: "We filter it and package to deliver in the best case",
            image: 'assets/img/ica-slidebox-img-2.jpg',
          }
        ];
      
  }
  getProducts() {
    this.items.getProducts()
    .then(data => {
      this.products = data;
      console.log(this.products);
    });
  }

  startApp() {
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the slider page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the slider page
    this.menu.enable(true);
  }

}
