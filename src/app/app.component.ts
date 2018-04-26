import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataService, DataPlaceholderService } from '../shared/services';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { TaskPage } from '../pages/task/task';
import { NotesPage } from '../pages/notes/notes';
import { CalendarPage } from '../pages/calendar/calendar';
import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    dataService: DataService,
    placeholderService: DataPlaceholderService
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // get all data and cache in placeholer service
    // then navigate to rootpage
    Observable.forkJoin(
      dataService.getRandomContact(),
      dataService.getContacts(),
      dataService.getEvents(),
      dataService.getLocations(),
      dataService.getNotes()
    ).subscribe(response => {
      placeholderService.mi = response[0];
      placeholderService.contacts = response[1];
      placeholderService.events = response[2];
      placeholderService.locations = response[3];
      placeholderService.notes = response[4];

      this.rootPage = IntroPage;
    })
  }
}
