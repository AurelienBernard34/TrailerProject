import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiService} from '../../app/api.service';

/**
 * Generated class for the TrailersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trailers',
  templateUrl: 'trailers.html',
  providers:[ApiService]
})
export class TrailersPage {

  trailers:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private api:ApiService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrailersPage');
  }


ngOnInit() {
    this.api.getTrailers()
      .subscribe(
        trailers => {
          console.log('Trailers', trailers);
          this.trailers = trailers.json();
        },
        error => console.log('Error Http', error)
      );
    }
    
}
