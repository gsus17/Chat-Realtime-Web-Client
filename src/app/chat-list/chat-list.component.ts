import { Component, OnInit } from '@angular/core';
import { ChatListService } from './chat-list.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  public chatPreviewList = [];

  constructor(private chatListService: ChatListService) { }

  ngOnInit() {
    const data = this.chatListService.getChatList();
    console.log('Data %o', data);
    this.chatPreviewList = data;
  }

}
