import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatConversationComponent } from './chat-conversation.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ChatConversationComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ChatConversationComponent]
})
export class ChatConversationModule { }
