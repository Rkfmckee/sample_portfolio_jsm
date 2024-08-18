import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  	plugins: [react()],
  	server:
	{
		host: true,
		open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
	},
})
