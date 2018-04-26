import { Component } from '@angular/core';
import { SignupComponent } from '../signup/signup';
import { ForgotComponent } from '../forgot/forgot';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';
import { DataPlaceholderService } from '../../../shared/services';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  user: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dataService: DataPlaceholderService
  ) {
    this.user = dataService.mi;
   }

  signup() {
    this.navCtrl.setRoot(SignupComponent);
  }

  forgot() {
    this.navCtrl.setRoot(ForgotComponent);
  }

  login() {
    this.navCtrl.setRoot(TabsPage);
  }

}
