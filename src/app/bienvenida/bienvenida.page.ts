import { Component, OnInit } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar, IonButton, IonFooter, IonInput, IonNote, IonImg, IonContent, IonList, IonRow, IonGrid, IonCol, IonItem } from '@ionic/angular/standalone';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
  standalone: true,
  imports: [IonItem, IonCol, IonGrid, IonRow, IonList, IonImg, IonNote, IonFooter, IonButton, IonHeader, IonTitle, IonToolbar, RouterModule, IonInput, FormsModule, IonContent]
})


export class BienvenidaPage {
  constructor(private router: Router) { }

  users = <any[]>[
    { email: "a", password: "a" },
    { email: "usuario1@prueba.com", password: "1234" }
  ]

  email = ""
  password = ""
  mensaje: string = ""

  // verificar mail y contraseña para pasar login:
  verificarCredenciales() {
    const usuario = this.users.find(u => u.email === this.email && u.password === this.password);
    if (usuario) {
      console.log("Inicio de sesión exitoso");
      // Redirigir a la página principal
      this.router.navigate(['/tabs/tab1']);
    } else {
      this.mensaje = "(mail y/o contraseña incorrectos)";
      console.log("Credenciales inválidas");
    }
  }
}