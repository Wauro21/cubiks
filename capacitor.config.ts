import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.cubiks',
  appName: 'cubiks',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
,
    android: {
       buildOptions: {
          keystorePath: '/home/mauricio/Proyectos/cubiks/keys/cubiks_keys.jks',
          keystoreAlias: 'demo_build',
       }
    }
  };

export default config;
