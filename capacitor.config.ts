import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'news',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,   // Time in ms (3 seconds)
      launchAutoHide: true,        // Auto-hide after the duration
      androidScaleType: "CENTER_CROP",
      showSpinner: false,          // Set true if you want a loading spinner
      splashFullScreen: true,      // Enable full-screen splash
      splashImmersive: true,       // Use immersive mode
      backgroundColor: "#ffffff"   // Background color of splash screen
    }
  }
};


export default config;
