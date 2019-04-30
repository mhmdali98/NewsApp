import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServesProvider } from '../../providers/serves/serves';
import { Locaiation } from '../../modle/locaiation';
import { AngularFireDatabase , AngularFireObject } from '@angular/fire/database'
import { DelayPage } from '../delay/delay';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  newsList : AngularFireObject<any>;

  locaiation:Locaiation={
    title:'',
    dscrb:''
  }
  itemArray=[];
  myObject=[];
  items :any;
  constructor(public navCtrl: NavController,
              public servesProvider: ServesProvider,
              db:AngularFireDatabase) {

                this.newsList = db.object('news');
                this.newsList.snapshotChanges().subscribe(action =>{
                  if ( action.payload.val() == null || action.payload.val() == undefined){
                    console.log('no data')
                  } 
                  else{
                  this.itemArray.push(action.payload.val() as Locaiation)
                  this.myObject = Object.entries(this.itemArray[0])}
                  this.initializeItems();
                })
  }

  public delay(newss){
  console.log(newss)
    this.navCtrl.push(DelayPage,{newss});
    
  }
  initializeItems() {
    this.items = this.myObject.reverse()
   }

   
   remove(loca){
     this.servesProvider.deleteNews(loca).then( ()=>{
       this.navCtrl.setRoot(HomePage);
     })
    console.log(loca)
   }
}
