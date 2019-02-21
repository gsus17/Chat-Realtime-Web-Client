import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  public chatPreviewList = [];

  public chatContact: string = null;

  public searchFilter = '';

  @Output() chatSelection = new EventEmitter<string>();

  constructor(private chatService: ChatService) {
    console.log(`${ChatListComponent.name}::ctor`);
  }

  ngOnInit() {
    this.chatService.getConversations$().subscribe(response => {

      const previews = [];
      response.forEach(x => {
        console.log(`${ChatListComponent.name}::getConversations %o`, x.data());
        previews.push(x.data());
      });

      this.chatPreviewList = [...previews];
    });
  }

  /**
   * Open chat conversation.
   */
  public openChat(chatContact) {
    console.log(`${ChatListComponent.name}::openChat chatId %o`, chatContact);

    this.chatContact = this.chatContact !== chatContact ? chatContact : null;
    this.chatSelection.emit(this.chatContact);
  }

  /**
   * Filter list by text.
   */
  public filterList() {
    if (this.searchFilter !== undefined
      && this.searchFilter !== ''
      && this.searchFilter !== null) {

      this.chatPreviewList = this.chatPreviewList.filter(item => item.reference === this.searchFilter);
    }
  }

}
