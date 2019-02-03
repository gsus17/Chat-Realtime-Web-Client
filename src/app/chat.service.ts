import { Injectable, Query } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, CollectionReference } from '@angular/fire/firestore';
import { filter, toArray, map, tap } from 'rxjs/operators';
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
  public getConversationById(id): CollectionReference {
    return this.db.firestore.collection('chats');
  }

  /**
   * getConversationById
   */
  public getConversations(): Observable<firebase.firestore.QuerySnapshot> {

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
