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
      launchShowDuration: 1000,       // 👈 desactiva el splash nativo en un segundo Con esto QUITE la pantallita blanca que aparecía.
      backgroundColor: "#53005C",  // mismo color de tu splash page para que no se note el salto
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
    }
  }
};

export default config;
