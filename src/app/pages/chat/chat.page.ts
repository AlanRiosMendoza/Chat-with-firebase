import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ChatService } from '../../services/chat.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) content!: IonContent;
  messages: Observable<any[]> = new Observable<any[]>();
  newMsg = '';
  constructor(private chatService: ChatService, private router: Router) { }
  ngOnInit() {
    this.messages = this.chatService.getChatMessages();
  }
  sendMessage() {
    this.chatService.addChatMessage(this.newMsg).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }
  handleEnter(event: any): void {
    const keyboardEvent = event as KeyboardEvent; // Forzamos el tipo de evento
    keyboardEvent.preventDefault(); // Evita el salto de línea
    if (this.newMsg.trim()) {
      this.sendMessage();
    }
  }  
  signOut() {
    this.chatService.signOut().then(() => {
      this.router.navigateByUrl('/', { replaceUrl: true });
    });
  }
}