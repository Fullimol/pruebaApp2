import { Component, inject, OnInit, signal } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar, IonButton, IonFooter, IonInput, IonNote, IonImg, IonContent, IonList, IonRow, IonGrid, IonCol, IonItem } from '@ionic/angular/standalone';
import { RouterModule, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
  standalone: true,
  imports: [IonItem, IonCol, IonGrid, IonRow, IonList, IonImg, IonNote, IonButton, IonHeader, IonTitle, IonToolbar, RouterModule, IonInput, FormsModule, IonContent, ReactiveFormsModule, RouterLink]
})

export class BienvenidaPage {
  private supabase = inject(SupabaseService);
  constructor(private router: Router) { }

  mensajeErrorLogin = signal<string>('');
  email = ""
  password = ""

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  //accion de boton login:
  async onLogin() {
    this.mensajeErrorLogin.set('');
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;

    try {
      const { user } = await this.supabase.signIn({
        email: email!,
        password: password!
      });

      console.log("Usuario logueado:", user);
      
      this.router.navigate(['/tabs/tab1']);
      this.loginForm.reset();
    } catch (error: any) {
      console.error("Error en login:", error.message);
      this.mensajeErrorLogin.set('Usuario y/o contraseña incorrectos');
    }
  }

  //esto debe completar los campos de los inputs
  loginTest(userNum: number) {
    const testUsers = [
      { email: 'marcela.ramirez@gmail.com', password: '123456' },
      { email: 'ruben.pablo@yahoo.com', password: '987654' },
      { email: 'jaimito.gomez@hotmail.com', password: 'pass1897' }
    ];

    if (userNum >= 1 && userNum <= 3) {
      this.loginForm.setValue(testUsers[userNum - 1]);
    }
  }

}