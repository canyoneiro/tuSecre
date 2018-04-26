import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Note } from '../../shared/model';
import { DataPlaceholderService } from '../../shared/services';
import { AddNoteComponent } from './add-note/add-note';
import { SettingPage } from '../setting/setting';

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage implements OnInit {

  notes: Note[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataService: DataPlaceholderService
  ) { }

  ngOnInit() {
    this.notes = this.dataService.notes;
  }

  ionViewDidEnter(){
    this.notes = this.dataService.notes;
  }

  openNote(note) {
    this.navCtrl.push(AddNoteComponent, note);
  }

  add(type) {
    const note: Note = {
      color: '#ccc',
      title: '',
      type: type,
      list: []
    }
    this.navCtrl.push(AddNoteComponent, note);
  }

  openSetting(){
    this.navCtrl.push(SettingPage);
  }

}
