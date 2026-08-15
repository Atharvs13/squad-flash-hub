import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    server: {
      hmr: {
        host: "100.67.247.72",
        port: 8082,
      },
    },
  },

  tanstackStart: {
    server: { entry: "server" },
  },
});