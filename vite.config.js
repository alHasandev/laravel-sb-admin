import { defineConfig } from 'vite';
import path from "path";
import laravel from 'laravel-vite-plugin';

const PREFIX_RES = 'resources/';
const resources = [
  'css/app.css',
  'css/app.scss',
  'js/app.js',
]

export default defineConfig({
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~fontawesome': path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free'),
    }
  },
  plugins: [
    laravel({
      input: resources.map(res => PREFIX_RES + res),
      refresh: true,
    }),
  ],
});
