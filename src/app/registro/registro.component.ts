import { Component, inject, OnInit, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonImg, IonToolbar, IonContent, IonHeader, IonTitle, IonInput, IonList, IonItem, IonRow, IonCol, IonButton, IonNote, IonGrid, } from "@ionic/angular/standalone";
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  imports: [IonNote, IonButton, IonCol, IonRow, IonItem, IonList, IonInput, IonTitle, IonHeader, IonImg, IonToolbar, IonContent, IonGrid, ReactiveFormsModule, RouterLink],
})
export class RegistroComponent implements OnInit {
  private supabase = inject(SupabaseService); // 👈 inyecta el servicio
  private router = inject(Router); // 👈 para redirigir después del registro

  mensajeErrorRegistro = signal<string>('')
  email = ""
  password = ""


  //formulario de registro:
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repetirPassword: new FormControl('', [Validators.required, this.validarContrasenias]),
  })


  validarContrasenias(control: AbstractControl): ValidationErrors | null {
    const password = control.parent?.get('password')?.value;
    const confirmPassword = control.value;
    if (!confirmPassword || !password) return { iguales: false };
    return confirmPassword === password ? null : { iguales: false };
  }

  async onRegister() {
    this.mensajeErrorRegistro.set('');
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.registerForm.value;

    try {
      const { user, session } = await this.supabase.signUp({
        email: email!,
        password: password!
      });

      console.log('✅ Usuario creado:', user);
      console.log('🔑 Sesión activa:', session);

      // Redirigir al dashboard (ejemplo)
      this.router.navigate(['/tabs/tab1']);
    } catch (error: any) {
      console.error('❌ Error en registro:', error.message);
      this.mensajeErrorRegistro.set('Email ya registrado');
    }
  }

  ngOnInit() { }
}
