import { defineConfig, loadEnv } from 'vite';

// This is a minimal, standard configuration that relies on Vite's smart defaults.
// All previous overrides have been removed as they were the root cause of the build failures.
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    return {
      // Explicitly set the project root. This is crucial for the build runner
      // to resolve paths correctly, which was the root cause of all failures.
      root: '.',
      // The base path for the deployed site.
      base: mode === 'production' ? '/---z-1/' : './',
      // Define environment variables.
      define: {
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || '')
      },
      // Restore CSS processing configuration for Tailwind CSS.
      css: {
        postcss: './postcss.config.js'
      }
    };
});
