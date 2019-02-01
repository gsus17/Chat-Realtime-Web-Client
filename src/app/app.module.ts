import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { ChatService } from './chat.service';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBoCSDpLI_7bJ84BeIZtZp83REmGWlCk44',
  authDomain: 'chat-real-time-92cc8.firebaseapp.com',
  databaseURL: 'https://chat-real-time-92cc8.firebaseio.com',
  projectId: 'chat-real-time-92cc8',
  storageBucket: '',
  messagingSenderId: '1085403485140'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  bootstrap: [AppComponent],
  providers: [ChatService, { provide: FirestoreSettingsToken, useValue: {} }],

})
export class AppModule { }
