import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
export interface User {
  uid: string;
  email: string;
}
export interface Message {
  createdAt: firebase.firestore.FieldValue;
  id: string;
  from: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
}
@Injectable({
  providedIn: 'root'
})

export class ChatService {
  currentUser: User | null = null;
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.currentUser = {
          uid: user.uid,
          email: user.email || ''
        };
      } else {
        this.currentUser = null;
      }
    });
  }
  async signup({ email, password }: { email: string, password: string }): Promise<any> {
    const credential = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    const uid = credential.user ? credential.user.uid : '';
    if (!credential.user) {
      throw new Error('User credential is null');
    }
    return this.afs.doc(
      `users/${uid}`
    ).set({
      uid,
      email: credential.user.email,
    })
  }
  signIn({ email, password }: { email: string, password: string }) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }
  addChatMessage(msg: string): Promise<any> {
    if (!this.currentUser) {
      throw new Error('No user is currently signed in');
    }
    return this.afs.collection('messages').add({
      msg: msg,
      from: this.currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
  getChatMessages() {
    let users: User[] = [];
    return this.getUsers().pipe(
      switchMap(res => {
        users = res;
        return this.afs.collection('messages', ref => ref.orderBy('createdAt')).valueChanges() as Observable<Message[]>;
      }),
      map((messages: Message[]) => {
        // Get the real name for each user
        for (let m of messages) {
          m.fromName = this.getUserForMsg(m.from, users);
          m.myMsg = this.currentUser ? this.currentUser.uid === m.from : false;
        }
        return messages;
      })
    );
  }
  private getUsers(): Observable<User[]> {
    return this.afs ? this.afs.collection('users').valueChanges({ idField: 'uid' }) as Observable<User[]> : new Observable<User[]>();
  }
  private getUserForMsg(msgFromId: string, users: User[]): string {
    for (let usr of users) {
      if (usr.uid == msgFromId) {
        return usr.email;
      }
    }
    return 'Deleted';
  }
}
