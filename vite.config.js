import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "Service-Worker-Allowed": "/",
      "Cache-Control": "no-store",
    },
  },
});
