import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChatListService } from './chat-list.service';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  public chatPreviewList = [];

  public chatIdSelected: string = null;
  
  @Output() chatSelection = new EventEmitter<string>();


  constructor(
    private chatListService: ChatListService,
    private chatService: ChatService) {
    console.log(`${ChatListComponent.name}::ctor`);

  }

  ngOnInit() {
    const data = this.chatListService.getChatList();
    console.log('Data %o', data);
    this.chatPreviewList = data;
  }

  /**
   * getChats
   */
  public getChats() {
    console.log(`${ChatListComponent.name}::getChats`);

  }

  /**
   * OpenChat.
   */
  public openChat(chatId) {
    console.log(`${ChatListComponent.name}::openChat chatId %o`, chatId);

    this.chatIdSelected = this.chatIdSelected !== chatId ? chatId : null;
    this.chatSelection.emit(this.chatIdSelected);
  }

}
