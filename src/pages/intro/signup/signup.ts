import { Component } from '@angular/core';
import { LoginComponent } from '../login/login';
import { ForgotComponent } from '../forgot/forgot';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';
import { DataPlaceholderService } from '../../../shared/services';

@Component({
  selector: 'signup',
  templateUrl: 'signup.html'
})
export class SignupComponent {

  user: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dataService: DataPlaceholderService
  ) {
    this.user = dataService.mi;
    this.user.fullname = this.user.firstname + ' ' + this.user.lastname
   }

  login(){
    this.navCtrl.setRoot(LoginComponent);
  }

  signup(){
    this.navCtrl.setRoot(TabsPage);
  }

}
