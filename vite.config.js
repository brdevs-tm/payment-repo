import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/payment-system/", // Bu yerda repository nomingizni yozing
});
