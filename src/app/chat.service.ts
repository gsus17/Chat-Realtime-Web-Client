import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
  public getConversationById(id): Observable<{}[]> {
    this.db.collection('chats').doc(`${id}`).collection('conversations').valueChanges()
      .subscribe((data) => {
        console.log('DATA %o', data);
      });
    return this.db.collection('chats').doc(`${id}`).collection('conversations').valueChanges();
  }

  public sendMessage(message: Message): void {
    console.log(`${ChatService.name}::sendMessage`);
    this.db.collection('chats/')
      .doc(`${message.to}`)
      .collection('conversations')
      .add(message);
  }
}
