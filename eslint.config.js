// ESLint configuration for Next.js 14 and modern JS
import js from '@eslint/js';
import next from 'eslint-plugin-next';

export default [
  js.configs.recommended,
  {
    plugins: {
      next,
    },
    extends: ['plugin:next/recommended'],
    rules: {
      // Example: allow console for debugging
      'no-console': 'warn',
      // Add project-specific rules here
    },
  },
];
