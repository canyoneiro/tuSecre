import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataPlaceholderService } from '../../shared/services';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  contact:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dataService: DataPlaceholderService
  ) { }

  ionViewDidLoad() {
    this.contact = this.dataService.mi;
  }

}
