import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'

// Ignore build output globally
globalIgnores(['dist', 'node_modules'])

export default defineConfig([
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    extends: [js.configs.recommended],
  },
])
