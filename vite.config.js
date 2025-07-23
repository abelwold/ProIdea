import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'robots.txt',
        'icons/icon-192x192.png',
        'icons/icon-512x512.png',
        'resume.pdf',
        'screenshot.png'
      ],
      workbox: {
        navigateFallback: 'index.html', // ✅ SPA-safe fallback for all routes
        navigateFallbackDenylist: [
          /^\/resume\.pdf$/,
          /^\/icons\//,
          /^\/images\//,
          /^\/screenshot\.png$/,
          /^\/favicon\.svg$/,
          /^\/robots\.txt$/
        ]
      },
      manifest: {
        name: 'Abel Nerea',
        short_name: 'AbelApp',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4f46e5',
        description: "Install Abel Nerea's personalized web apps to your home screen.",
        categories: ['portfolio', 'personalization', 'tools'],
        icons: [
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        screenshots: [
          {
            src: 'screenshot.png',
            sizes: '1280x720',
            type: 'image/png',
            form_factor: 'wide'
          }
        ]
      }
    })
  ]
});
