import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatConversationComponent } from './chat-conversation.component';
import { MaterialModule } from '../material/material.module';
import { MessageBoxComponent } from './message-box/message-box.component';

@NgModule({
  declarations: [ChatConversationComponent, MessageBoxComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ChatConversationComponent]
})
export class ChatConversationModule { }
