import { Component } from '@angular/core';
import { IonicPage, NavController , NavParams } from 'ionic-angular';
import { ServesProvider } from '../../providers/serves/serves';
import { Locaiation } from '../../modle/locaiation';
import { AngularFireDatabase , AngularFireObject } from '@angular/fire/database';

/**
 * Generated class for the DelayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delay',
  templateUrl: 'delay.html',
})
export class DelayPage {
  

  newsList : AngularFireObject<any>;

  locaiation:Locaiation={
    title:'',
    dscrb:''
  }
  itemArray=[];
  myObject=[];
  user:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public servesProvider: ServesProvider,
              db:AngularFireDatabase ,
              ) {
                this.user = navParams.get('newss');
                console.log(this.user);
                this.newsList = db.object('news');
                this.newsList.snapshotChanges().subscribe(action =>{
                  if ( action.payload.val() == null || action.payload.val() == undefined){
                    console.log('no data')
                  } 
                  else{
                  this.itemArray.push(action.payload.val() as Locaiation)
                  this.myObject = Object.entries(this.itemArray[0])}
                })
  }


}
