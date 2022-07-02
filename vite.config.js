import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: [
        "./src/favicon_package_v0.16/favicon.ico",
        "./src/favicon_package_v0.16/favicon-32x32.png",
        "./src/favicon_package_v0.16/android-chrome-192x192.png",
      ],
      manifest: {
        name: "Redux Mart",
        short_name: "Redux-Mart",
        description:
          "Redux Shopping Cart App Build with Redux and Redux Toolkit",
        theme_color: "#645cff",
        start_url: "/",
        display: "standalone",
        icons: [
          {
            src: "./src/favicon_package_v0.16/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./src/favicon_package_v0.16/logo_512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "./src/favicon_package_v0.16/logo_512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },

      registerType: "autoUpdate",
      injectRegister: "script",
      strategies: "generateSW",

      devOptions: {
        enabled: true,
      },
    }),
  ],
});
