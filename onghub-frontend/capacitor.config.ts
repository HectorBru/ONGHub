import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'hub.ONG',
  appName: 'ONGHub',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      androidScaleType: 'CENTER_CROP',
      splashFullScreen: true,
      splashImmersive: false,
      backgroundColor: '#3ab271',
    },
  },
};

export default config;
