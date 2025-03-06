import { defineConfig } from "vite";
import zaloMiniApp from "zmp-vite-plugin";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: "./src",
    base: "",
    plugins: [zaloMiniApp(), react(), tsconfigPaths()],
    resolve:{
      alias:{
        "@components":path.resolve(__dirname, "src/components"),
        "@modules":path.resolve(__dirname, "src/modules"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@api": path.resolve(__dirname, "src/api"),
        "@store": path.resolve(__dirname, "src/store"),
        "@product": path.resolve(__dirname, "src/components/product"),
        "@mock": path.resolve(__dirname, "mock"),
      }
    }
  });
};
