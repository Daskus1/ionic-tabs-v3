import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private values: Array<number> = [];

  constructor(public navCtrl: NavController) {
    for(let i=0; i<200; i++){
      this.values.push(i);
    }
  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad() HomePage")
  }

}
