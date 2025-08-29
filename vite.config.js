import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // base 경로를 배포 환경에 맞게 고정합니다.
  base: '/', 
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})









// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vite.dev/config/
// export default defineConfig(({ mode }) => {
//   return {
//     plugins: [vue()],
//     // base: mode === 'production'  ?  '/vue-site/'  :  '/',        
//      //예: /my-react-app/  
//   }
// })