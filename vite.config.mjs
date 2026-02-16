import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  esbuild: {
    jsx: 'automatic',
  },
  optimizeDeps: {
    entries: ['index.html'],
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
};
