import { Component } from '@angular/core';
import { NavParams, NavController, PopoverController } from 'ionic-angular';
import { DataPlaceholderService } from '../../../shared/services';
import { Note } from '../../../shared/model';
import { ColorsComponent } from '../../../components/components.module';

@Component({
  selector: 'add-note',
  templateUrl: 'add-note.html'
})
export class AddNoteComponent {

  note: Note;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popCtrl: PopoverController,
    public dataService: DataPlaceholderService
  ) {
    this.note = navParams.data;
  }

  openColor(){
    let colorModal = this.popCtrl.create(ColorsComponent);
    colorModal.present();
    colorModal.onDidDismiss((data) => {
      if (data) { this.note.color = data }
    });
  }

  addListItem(){
    this.note.list.push({text:'', checked: false});
  }

  removeListItem(index){
    this.note.list.splice(index, 1);
  }

  getSummary(note){
    return ((note.list.filter(list=> list.checked).length)/note.list.length) * 100;
  }

  save(){
    if(this.note.id){
      const index = this.dataService.notes.findIndex(event=> event.id ===this.note.id)
      this.dataService.notes.splice(index, 1, this.note);
    }else{
      this.dataService.notes.push(this.note);
    }
    this.navCtrl.pop();
  }

}
