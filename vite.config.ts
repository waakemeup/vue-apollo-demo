import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import graphqlPlugin from "vite-plugin-graphql";
import graphql from "@rollup/plugin-graphql";
import Vql from "vite-plugin-vue-gql";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), graphql(), graphqlPlugin, Vql()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
