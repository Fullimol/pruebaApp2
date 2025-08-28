import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton,
  IonImg, IonIcon, IonButtons, IonText } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonText, 
    IonButtons, IonIcon, IonImg, IonHeader, IonToolbar, IonTitle, IonContent, IonButton,
    RouterModule // 👈 necesario para routerLink
  ],
})
export class Tab1Page {
  imageUrl = 'https://picsum.photos/300/200';

  constructor() {
    // Registrar el icono que vas a usar en el template
    addIcons({ 'log-out-outline': logOutOutline });
  }

  cambiarImagen() {
    this.imageUrl = `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`;
  }
}
