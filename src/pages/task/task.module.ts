import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';

import { TaskPage } from './task';

@NgModule({
  declarations: [
    TaskPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskPage),
    ComponentsModule
  ],
})
export class TaskPageModule {}
