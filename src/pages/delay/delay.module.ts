import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DelayPage } from './delay';

@NgModule({
  declarations: [
    DelayPage,
  ],
  imports: [
    IonicPageModule.forChild(DelayPage),
  ],
})
export class DelayPageModule {}
