import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class Tab1Page {
  constructor() {}

  imageUrl = 'https://picsum.photos/300/200';

  cambiarImagen() {
  this.imageUrl = `https://picsum.photos/300/200?random=${Math.floor(Math.random()*1000)}`;
}
}


