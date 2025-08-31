import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

  constructor() {
    this.configureStatusBar();
    this.showSplash();
  }

  async configureStatusBar() {
    await StatusBar.setOverlaysWebView({ overlay: false });
  }

  async showSplash() {
    await SplashScreen.show({
      showDuration: 3000,
      autoHide: true,
    });
  }

}


// async ngOnInit() {
//   // Solo en Android/iOS (no en navegador)
//   if (Capacitor.isNativePlatform()) {
//     try {
//       await StatusBar.setOverlaysWebView({ overlay: false }); // ← evita que se tape con la barra de estado
//       // Opcional:
//       // await StatusBar.setStyle({ style: Style.Dark });       // o Style.Light
//       // await StatusBar.setBackgroundColor({ color: '#000000' });
//     } catch (err) {
//       console.warn('StatusBar no disponible:', err);
//     }
//   }
// }