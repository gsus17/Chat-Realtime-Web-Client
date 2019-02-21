import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../chat.service';
import { map } from 'rxjs/operators';

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

  private conversationSubcription = null;

  constructor(private chatService: ChatService) { }

  /**
   * Message to sent.
   */
  public messageToSent = '';

  ngOnInit() {

    this.data.subscribe(chatContact => {
      console.log(`${ChatConversationComponent.name} chatId %o`, chatContact);
      this.chatContact = chatContact;

      if (this.hasChatContact()) {
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

  /**
   * hasChatContact
   */
  public hasChatContact() {
    return this.chatContact !== null && this.chatContact !== undefined;
  }

  /**
   * keyPressEvent
   */
  public keyPressEvent($event) {
    if ($event.charCode === 13) {
      $event.preventDefault();
      this.sendMessage();
    }
  }

  private getConversations() {

    if (this.conversationSubcription !== null) {
      this.conversationSubcription.unsubscribe();
    }

    this.conversationSubcription = this.chatService.getConversationById$()
      .pipe(
        map(response => response.filter((item: any) => {
          return item.to !== undefined && item.to === this.chatContact.id;
        }))
      )
      .subscribe((response: any) => {
        console.log(`${ChatConversationComponent.name} response %o `, response);

        this.messageList = [...response];
        this.inProgress = false;
      });

  }
}
