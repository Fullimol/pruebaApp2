import { Component, NgZone } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonActionSheet, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonIcon, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonActionSheet, RouterModule],
})
export class Tab3Page {
  valorSeleccionado: string = 'black'

  constructor(private zone: NgZone) {
    addIcons({ 'log-out-outline': logOutOutline });
  } // esto lo tuve que poner porque sino no cambiaba el color al momento que lo seleccionaba


  public selectSheetButtons = [
    {
      text: 'red',
      handler: () => {
        this.zone.run(() => { // esto lo tuve que poner porque sino no cambiaba el color al momento que lo seleccionaba
          this.valorSeleccionado = 'red';
        });
      },
    },
    {
      text: 'green',
      handler: () => {
        this.zone.run(() => { // esto lo tuve que poner porque sino no cambiaba el color al momento que lo seleccionaba
          this.valorSeleccionado = 'green';
        });
      },
    },
    {
      text: 'blue',
      handler: () => {
        this.zone.run(() => { // esto lo tuve que poner porque sino no cambiaba el color al momento que lo seleccionaba
          this.valorSeleccionado = 'blue';
        });
      },
    },
    {
      text: 'white',
      handler: () => {
        this.zone.run(() => { // esto lo tuve que poner porque sino no cambiaba el color al momento que lo seleccionaba
          this.valorSeleccionado = 'white';
        });
      },
    },
  ];
}
