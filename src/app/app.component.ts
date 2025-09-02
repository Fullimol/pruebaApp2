import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { StatusBar } from '@capacitor/status-bar';
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
      showDuration: 0,
      autoHide: true,
    });
  }

}