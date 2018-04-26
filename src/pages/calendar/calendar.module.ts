import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { DirectiveModule } from '../../shared/directives/directive.module';

import { CalendarPage, MonthPopover } from './calendar';
import { AddEvent } from './add-event/add-event';
import { EventDetail, EventDetailPopover } from './detail/event-detail';
import { MomentModule} from "ngx-moment";

@NgModule({
  declarations: [
    CalendarPage,
    MonthPopover,
    AddEvent,
    EventDetail,
    EventDetailPopover
  ],
  imports: [
    IonicPageModule.forChild(CalendarPage),
    ComponentsModule,
    DirectiveModule,
    MomentModule
  ],
  entryComponents: [
    MonthPopover,
    AddEvent,
    EventDetail,
    EventDetailPopover
  ]
})
export class CalendarPageModule {}
