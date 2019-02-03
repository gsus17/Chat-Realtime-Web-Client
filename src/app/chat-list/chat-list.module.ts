import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ChatListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [],
  exports: [ChatListComponent]
})
export class ChatListModule { }
