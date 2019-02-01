import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-conversation',
  templateUrl: './chat-conversation.component.html',
  styleUrls: ['./chat-conversation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatConversationComponent implements OnInit {

  @Input() data: Observable<string>;
  chatId: string;

  public messageList: Message[] = [];

  constructor(private chatService: ChatService) { }

  /**
   * Message to sent.
   */
  public messageToSent = '';


  ngOnInit() {

    this.data.subscribe(chatId => {
      console.log(`${ChatConversationComponent.name} chatId %o`, chatId);
      this.chatId = chatId;

      if (this.chatId !== '') {
        this.getConversations();
      }
    });
  }

  /**
   * SendMessage.
   */
  public sendMessage() {
    console.log(`${ChatConversationComponent.name} sendMessage`);

    this.messageList.push();

    const id = this.chatService.createId();

    const newMessage: Message = {
      id: id,
      to: this.chatId,
      date: new Date(),
      message: this.messageToSent,
      sentByMe: true
    };

    this.chatService.sendMessage(newMessage);
    this.messageToSent = '';
  }

  /**
   * getClassMessage
   */
  public getClassMessage(item) {
    return item.sentByMe ? 'to' : 'from';
  }

  private getConversations() {
    this.chatService.getConversationById(this.chatId)
      .subscribe((data: any[]) => {
        console.log('DATA %o', data);
        this.messageList = [...data];
      });
  }
}
