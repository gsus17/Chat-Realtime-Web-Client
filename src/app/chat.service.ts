import { Injectable, Query } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private db: AngularFirestore) {
    console.log(`${ChatService.name}::ctor`);
  }

  /**
   * createId
   */
  public createId(): string {
    return this.db.createId();
  }

  /**
   * getConversationById
   */
  public getConversationById$(): Observable<{}[]> {
    return this.db.collection('chats').valueChanges();
  }

  /**
   * getConversationById
   */
  public getConversations$(): Observable<firebase.firestore.QuerySnapshot> {
    return this.db.collection('prestadores').get();
  }

  /**
   * sendMessage
   */
  public sendMessage(message: Message): void {
    console.log(`${ChatService.name}::sendMessage`);
    const newId = this.createId();

    message.id = newId;
    this.db.collection('chats')
      .doc(newId)
      .set(message);
  }
}
