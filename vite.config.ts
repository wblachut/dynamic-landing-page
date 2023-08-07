import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react(), tsconfigPaths(), svgr()],
    base: '/',
  };

  if (command !== 'serve') {
    config.base = '/dynamic-landing-page/';
  }

  return config;
});
