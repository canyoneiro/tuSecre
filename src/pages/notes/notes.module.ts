import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { MomentModule } from 'angular2-moment';
import { NotesPage } from './notes';
import { PipeModule } from '../../shared/pipes/pipe.module';
import { DirectiveModule } from '../../shared/directives/directive.module';
import { AddNoteComponent } from './add-note/add-note';

@NgModule({
  declarations: [
    NotesPage,
    AddNoteComponent
  ],
  imports: [
    IonicPageModule.forChild(NotesPage),
    MomentModule,
    ComponentsModule,
    PipeModule,
    DirectiveModule
  ],
  entryComponents: [
    AddNoteComponent
  ]
})
export class NotesPageModule {}
