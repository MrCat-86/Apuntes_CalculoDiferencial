import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx({
      extendMarkdownConfig: true, // Extiende la configuración para procesar KaTeX
      rehypePlugins: [rehypeKatex], // Procesador de fórmulas matemáticas
    }),
    sitemap(),
    tailwind(),
  ],
});
