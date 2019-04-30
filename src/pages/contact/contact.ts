import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Locaiation } from '../../modle/locaiation';
import { ServesProvider } from '../../providers/serves/serves';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  locaiation:Locaiation={
    title:'',
    dscrb:''
  }

  constructor(public navCtrl: NavController,
    public servesProvider: ServesProvider,
    public alertCtrl: AlertController) {

  }

  addNews(locaiation:Locaiation){
    if(locaiation.title != '' && locaiation.dscrb != ''){
    this.servesProvider.addNews(locaiation).then(ref =>{
      this.showAlert();
      this.navCtrl.setRoot(HomePage)
    })}
    else {this.showAlert2();}
  }

  showAlert2(){
    const alert = this.alertCtrl.create({
      title: 'Filed Add',
      buttons: ['OK']
    });
    alert.present();  
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'News Added',
      buttons: ['OK']
    });
    alert.present();
  }

}
