import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPageComponent } from './master-page.component';
import { MaterialModule } from '../material/material.module';
import { MasterPageRoutingModule } from './master-page-routing.module';
import { ChatListModule } from '../chat-list/chat-list.module';
import { ChatConversationModule } from '../chat-conversation/chat-conversation.module';

@NgModule({
  declarations: [MasterPageComponent],
  imports: [
    CommonModule,
    MasterPageRoutingModule,
    ChatListModule,
    ChatConversationModule,
    MaterialModule
  ]
})
export class MasterPageModule { }
