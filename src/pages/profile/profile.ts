import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataPlaceholderService } from '../../shared/services';
import { IntroPage } from '../intro/intro';
import { SettingPage } from '../setting/setting';
import { AddEvent } from '../calendar/add-event/add-event';
import { EventDetail } from '../calendar/detail/event-detail';
import { AddNoteComponent } from '../notes/add-note/add-note';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

  user: any;
  events: any[];
  notes: any[];
  tabs: { text: string; active?: boolean }[];
  tab: { text: string; active?: boolean };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dataService: DataPlaceholderService
  ) {
    this.user = dataService.mi;
    this.events = dataService.events.filter(event => new Date(event.start.toString()).getDate() === new Date().getDate());
    this.notes = dataService.notes.filter(event => new Date(event.created.toString()).getDate() === new Date().getDate());
  }

  ngOnInit() {
    this.setUpTabs();
    console.log('ionViewDidLoad ProfilePage');
  }

  setUpTabs() {
    this.tabs = [
      {
        text: 'Events',
        active: true
      },
      {
        text: 'Notes',
      }
    ];
    this.tab = this.tabs[0];
  }

  setSelectedTab(tab) {
    this.tabs.map(tab => {
      tab.active = false;
      return tab
    });
    tab.active = true;
    this.tab = tab;
  }

  addEvent() {
    this.navCtrl.push(AddEvent);
  }

  addNote() {
    const note = {
      color: '#ccc',
      title: '',
      type: 'note',
      list: []
    }
    this.navCtrl.push(AddNoteComponent, note);
  }

  openEvent(event) {
    this.navCtrl.push(EventDetail, event);
  }

  openNote(note) {

    this.navCtrl.push(AddNoteComponent, note);
  }

  getSummary(note){
    return ((note.list.filter(list=> list.checked).length)/note.list.length) * 100;
  }

  openSetting() {
    this.navCtrl.push(SettingPage);
  }

  openIntro(){
    this.navCtrl.push(IntroPage);
  }

}
