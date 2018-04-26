import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { DashboardPage } from './dashboard';

@NgModule({
  declarations: [
    DashboardPage
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    ComponentsModule
  ],
})
export class DashboardPageModule {}
