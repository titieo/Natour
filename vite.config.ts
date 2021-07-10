import { defineConfig } from 'vite'

export default defineConfig({
    base: '/Natour/',
    build: { sourcemap: 'inline' },
    server: {
        open: true,
    },
})
