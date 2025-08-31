import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonImg, IonToolbar, IonContent, IonHeader, IonTitle, IonInput, IonList, IonItem, IonRow, IonCol, IonButton, IonNote, IonGrid, } from "@ionic/angular/standalone";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  imports: [IonNote, IonButton, IonCol, IonRow, IonItem, IonList, IonInput, IonTitle, IonHeader, IonImg, IonToolbar, IonContent, IonGrid, ReactiveFormsModule, RouterLink],
})
export class RegistroComponent implements OnInit {
  email = ""
  password = ""
  mensaje: string = ""


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


  onSubmit(){
    console.log(this.registerForm.value);
  }

  ngOnInit() { }
}
