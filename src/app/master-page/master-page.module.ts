import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPageComponent } from './master-page.component';
import { MaterialModule } from '../material/material.module';
import { MasterPageRoutingModule } from './master-page-routing.module';
import { ChatListModule } from '../chat-list/chat-list.module';

@NgModule({
  declarations: [MasterPageComponent],
  imports: [
    CommonModule,
    MasterPageRoutingModule,
    ChatListModule,
    MaterialModule
  ]
})
export class MasterPageModule { }
