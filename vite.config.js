import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/dj-demo2-app/", // ✅ MUST MATCH REPO NAME
  plugins: [react(), tailwindcss()],
});
