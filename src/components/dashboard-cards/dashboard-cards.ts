import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'dashboard-cards',
  templateUrl: 'dashboard-cards.html'
})
export class DashboardCardsComponent {

  @Input() items: Array<{icon:string; text:string; component:any, color: string, number: string, subtext?: string;}>


  constructor(
    public navCtrl: NavController
  ) { }

  goToPage(page){
    this.navCtrl.setRoot(page);
  }

}
