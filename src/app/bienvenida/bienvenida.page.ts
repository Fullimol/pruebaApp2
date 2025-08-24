import { Component, OnInit } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar, IonButton, IonFooter, IonInput } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
  standalone: true,
  imports: [IonFooter, IonButton, IonHeader, IonTitle, IonToolbar, RouterModule, IonInput, FormsModule]
})


export class BienvenidaPage {
  constructor() { }

  email = ""
  password = ""
}
