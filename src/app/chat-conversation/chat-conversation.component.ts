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

  constructor() { }

  ngOnInit() {

    this.data.subscribe(chatId => {
      console.log(`${ChatConversationComponent.name} chatId %o`, chatId);
      this.chatId = chatId;
    });
  }

}
