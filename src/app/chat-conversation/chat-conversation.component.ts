import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-conversation',
  templateUrl: './chat-conversation.component.html',
  styleUrls: ['./chat-conversation.component.scss']
})
export class ChatConversationComponent implements OnInit {

  @Input() chatId: string;

  constructor() { }

  ngOnInit() {
  }

}
