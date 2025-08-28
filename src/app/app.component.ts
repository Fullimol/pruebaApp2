import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  async ngOnInit() {
    // Solo en Android/iOS (no en navegador)
    if (Capacitor.isNativePlatform()) {
      try {
        await StatusBar.setOverlaysWebView({ overlay: false }); // ← evita que se tape con la barra de estado
        // Opcional:
        // await StatusBar.setStyle({ style: Style.Dark });       // o Style.Light
        // await StatusBar.setBackgroundColor({ color: '#000000' });
      } catch (err) {
        console.warn('StatusBar no disponible:', err);
      }
    }
  }
}
