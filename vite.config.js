import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import Markdown from "vite-plugin-md";
//智能提示
/**@type {import('vite').UserConfig}*/

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Components({
      resolvers: [IconsResolver()],
    }),
    Icons({ autoInstall: true }),
    Markdown(),
  ],
});
