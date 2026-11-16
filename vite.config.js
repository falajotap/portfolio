import { defineConfig } from 'vite';
// base './' = caminhos relativos: funciona em usuario.github.io/nome-do-repositorio sem ajustes
export default defineConfig({ base: './', build: { outDir: 'dist', assetsInlineLimit: 0 } });
