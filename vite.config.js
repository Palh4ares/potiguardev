import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/potiguardev/",  // <- importante: o nome exato do repositório
});
