import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.cubiks',
  appName: 'cubiks',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
