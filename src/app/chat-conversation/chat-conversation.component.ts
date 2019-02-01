import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-conversation',
  templateUrl: './chat-conversation.component.html',
  styleUrls: ['./chat-conversation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatConversationComponent implements OnInit {

  @Input() data: Observable<string>;
  chatId: string;

  public messageList: Message[] = [
    {
      id: 1,
      date: new Date(),
      sentByMe: true,
      message: 'Mensaje 1'
    },
    {
      id: 2,
      date: new Date(),
      sentByMe: true,
      message: 'Mensaje 2'
    },
    {
      id: 3,
      date: new Date(),
      sentByMe: false,
      message: 'Mensaje 3'
    },

  ];

  /**
   * Message to sent.
   */
  public messageToSent = '';

  constructor() { }

  ngOnInit() {

    this.data.subscribe(chatId => {
      console.log(`${ChatConversationComponent.name} chatId %o`, chatId);
      this.chatId = chatId;
    });
  }

  /**
   * SendMessage.
   */
  public sendMessage() {
    console.log(`${ChatConversationComponent.name} sendMessage`);

    this.messageList.push({
      id: Math.random(),
      date: new Date(),
      message: this.messageToSent,
      sentByMe: true
    });

    this.messageToSent = '';
  }

  /**
   * getClassMessage
   */
  public getClassMessage(item) {
    return item.sentByMe ? 'to' : 'from';
  }

}

/**
 * Message entity.
 */
interface Message {
  id: number;
  message: string;
  sentByMe: boolean;
  date: Date;
}
