import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Locaiation } from '../../modle/locaiation';
/*
  Generated class for the ServesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServesProvider {
  private loca = this.db.list<Locaiation>('news')

  constructor(public db: AngularFireDatabase) {
    console.log('Hello ServesProvider Provider');
  }

  getNews(){
    return this.loca;
  }

  addNews(news:Locaiation){
    return this.loca.push(news)
  }

  deleteNews(newsr){
    return this.loca.remove(newsr)
  }

}
