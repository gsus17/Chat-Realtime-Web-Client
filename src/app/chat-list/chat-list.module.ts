import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list.component';
import { ChatListService } from './chat-list.service';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ChatListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [ChatListService],
  exports: [ChatListComponent]
})
export class ChatListModule { }
