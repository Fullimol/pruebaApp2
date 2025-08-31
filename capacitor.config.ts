import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'pruebaApp',
  webDir: 'www',
  plugins: {
    StatusBar: {
      overlaysWebView: false
    },
    SplashScreen: {
      launchAutoHide: true,
      backgroundColor: "#53005C",   // mismo color que el fondo de tu splash.png
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
    }
  }
};



export default config;
