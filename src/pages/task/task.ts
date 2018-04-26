import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataPlaceholderService } from '../../shared/services';
import { Event } from '../../shared/model';
import { EventDetail } from '../calendar/detail/event-detail';
import { AddEvent } from '../calendar/add-event/add-event';
import { SettingPage } from '../setting/setting';

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage implements OnInit {

  events: Event[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataService: DataPlaceholderService
  ) { }

  ngOnInit() {
    this.events = this.dataService.events;
  }

  add(){
    this.navCtrl.push(AddEvent);
  }

  open(event){
    this.navCtrl.push(EventDetail, event);
  }

  openSetting(){
    this.navCtrl.push(SettingPage);
  }

}
