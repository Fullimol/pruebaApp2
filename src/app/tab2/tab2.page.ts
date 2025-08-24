import { Component } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton]
})
export class Tab2Page {

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
