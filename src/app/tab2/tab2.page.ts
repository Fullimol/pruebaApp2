import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonButtons, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterModule]
})
export class Tab2Page {
  constructor() {
      // Registrar el icono que vas a usar en el template
      addIcons({ 'log-out-outline': logOutOutline });
    }

  async vibrar(tipo: 'corta' | 'larga') {
    switch (tipo) {
      case 'larga':
        await Haptics.vibrate({ duration: 1500 });
        break;
      case 'corta':
        await Haptics.impact({ style: ImpactStyle.Heavy });
        break;
    }
  }
}
