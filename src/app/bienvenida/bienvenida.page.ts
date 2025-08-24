import { Component, OnInit } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar, IonButton, IonFooter } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
  standalone: true,
  imports: [IonFooter, IonButton, IonHeader, IonTitle, IonToolbar, RouterModule]
})
export class BienvenidaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
