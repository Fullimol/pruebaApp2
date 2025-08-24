import { Component, NgZone } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonActionSheet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonActionSheet],
})
export class Tab3Page {
  valorSeleccionado: string = 'black'

  constructor(private zone: NgZone) { } // esto lo tuve que poner porque sino no cambiaba el color al momento que lo seleccionaba


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
