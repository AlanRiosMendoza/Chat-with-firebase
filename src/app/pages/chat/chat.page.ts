import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ChatService } from '../../services/chat.service';
import { Geolocation } from '@capacitor/geolocation';
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
    const keyboardEvent = event as KeyboardEvent;
    keyboardEvent.preventDefault();
    if (this.newMsg.trim()) {
      this.sendMessage();
    }
  }
  async sendLocation() {
    const coordinates = await this.getCurrentLocation();
    if (coordinates) {
      const locationMessage = `Ubicación: Lat: ${coordinates.coords.latitude}, Long: ${coordinates.coords.longitude}`;
      this.chatService.addChatMessage(locationMessage).then(() => {
        this.content.scrollToBottom();
      });
    }
  }

  // Función para obtener la ubicación
  async getCurrentLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      return coordinates;
    } catch (error) {
      console.error('Error al obtener la ubicación', error);
      return null;
    }
  }  
  signOut() {
    this.chatService.signOut().then(() => {
      this.router.navigateByUrl('/', { replaceUrl: true });
    });
  }
}