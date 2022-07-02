import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Redux Mart",
        short_name: "Redux-Mart",
        description:
          "Redux Shopping Cart App Build with Redux and Redux Toolkit",
        theme_color: "#645cff",
        icons: [
          {
            src: "./src/assets/logo.jpg.192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./src/assets/logo_512.jpg",
            sizes: "512x512",
            type: "image/jpg",
          },
        ],
      },
      icons: [
        {
          src: "./src/assets/logo.jpg.192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./src/assets/logo_512.jpg",
          sizes: "512x512",
          type: "image/jpg",
        },
        {
          src: "./src/assets/logo_512.jpg",
          sizes: "512x512",
          type: "image/jpg",
          purpose: "any maskable",
        },
      ],
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
