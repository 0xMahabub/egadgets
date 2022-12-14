import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // not-swc

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
