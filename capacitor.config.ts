import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'example.demo.docscanner',
  appName: 'docscanner',
  webDir: 'dist/doc-scanner-app',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
