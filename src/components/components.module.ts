import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MomentModule } from 'angular2-moment';
import { PipeModule } from '../shared/pipes/pipe.module';

import { FaIconComponent } from './fa-icon/fa-icon';
import { SimpleLineIconComponent } from './simple-line-icon/simple-line-icon';
import { DashboardCardsComponent } from './dashboard-cards/dashboard-cards';
import { EventListComponent } from './event-list/event-list';
import { ColorsComponent } from './colors/colors';
import { ContactPopoverComponent } from './contact-popover/contact-popover';
import { NoteListComponent } from './note-list/note-list';


@NgModule({
	declarations: [
    FaIconComponent,
    SimpleLineIconComponent,
    DashboardCardsComponent,
    EventListComponent,
    ColorsComponent,
    ContactPopoverComponent,
    NoteListComponent,

  ],
	imports: [
    IonicModule,
    MomentModule,
    PipeModule
  ],
	exports: [
    FaIconComponent,
    SimpleLineIconComponent,
    DashboardCardsComponent,
    EventListComponent,
    NoteListComponent,
  ],
  entryComponents: [
    ColorsComponent,
    ContactPopoverComponent
  ]
})
export class ComponentsModule {}

export * from './colors/colors';
export * from './contact-popover/contact-popover';
