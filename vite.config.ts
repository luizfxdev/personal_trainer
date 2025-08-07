import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Opcional: configurando o ambiente para produção se quiser fixar algo
  build: {
    outDir: 'dist' // garante que o output fique na pasta dist (padrão)
  },
  // Opcional: para resolver problemas com o caminho absoluto/importações
  resolve: {
    alias: {
      // exemplo, se você usar imports absolutos com '@'
      '@': '/src'
    }
  }
});
