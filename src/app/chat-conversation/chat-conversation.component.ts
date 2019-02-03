import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-conversation',
  templateUrl: './chat-conversation.component.html',
  styleUrls: ['./chat-conversation.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatConversationComponent implements OnInit {

  @Input() data: Observable<any>;
  chatContact: any;

  public inProgress = false;

  public messageList: Message[] = [];

  constructor(private chatService: ChatService) { }

  /**
   * Message to sent.
   */
  public messageToSent = '';


  ngOnInit() {

    this.data.subscribe(chatContact => {
      console.log(`${ChatConversationComponent.name} chatId %o`, chatContact);
      this.chatContact = chatContact;

      if (this.chatContact.id !== '') {
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
      to: this.chatContact.id,
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

  public hasAvatar() {
    return this.chatContact !== undefined
      && this.chatContact !== null
      && this.chatContact.contactAvatarLink !== null;
  }

  private getConversations() {

    this.chatService.getConversationById(this.chatContact.id)
      .onSnapshot(res => {
        this.inProgress = true;
        const arr = [];
        res.forEach((x) => {
          arr.push(x.data());
        });
        this.messageList = [];
        this.messageList = [...arr];
        this.inProgress = false;
      });
  }
}
