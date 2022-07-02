import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: [
        "./src/assets/logo.svg",
        "./src/assets/180.png",
        "./src/assets/logo.svg",
      ],
      manifest: {
        name: "Redux Mart",
        short_name: "Redux-Mart",
        description:
          "Redux Shopping Cart App Build with Redux and Redux Toolkit",
        theme_color: "#645cff",
        start_url: "https://reduxmart.vercel.app/",
        icons: [
          {
            src: "./src/assets/logo.jpg.192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./src/assets/logo_512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      icons: [
        {
          src: "./src/assets/logo.jpg.192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "./src/assets/logo_512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "./src/assets/logo_512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
      registerType: "autoUpdate",
      injectRegister: "script",
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
