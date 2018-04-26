import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MomentModule} from "ngx-moment";


import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroPageModule } from '../pages/intro/intro.module';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';
import { TaskPageModule } from '../pages/task/task.module';
import { NotesPageModule } from '../pages/notes/notes.module';
import { CalendarPageModule } from '../pages/calendar/calendar.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { SettingPageModule } from '../pages/setting/setting.module';

import { ComponentsModule } from '../components/components.module';
import { DataService, DataPlaceholderService } from '../shared/services';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

export const APP_CONFIG = {
  iconMode: 'ios',
  mode: 'ios',
  tabsHideOnSubPages: true,
  tabsPlacement: 'bottom',
  dayShortNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  backButtonText: '',
  backButtonIcon: 'arrow-round-back-outline'
};

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp, APP_CONFIG),
    ComponentsModule,
    IntroPageModule,
    DashboardPageModule,
    TaskPageModule,
    NotesPageModule,
    CalendarPageModule,
    ProfilePageModule,
    SettingPageModule,
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    DataService,
    DataPlaceholderService,
    StatusBar,
    SplashScreen,
    Keyboard,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
