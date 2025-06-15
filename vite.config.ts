import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: "0.0.0.0",
		port: 5173,
		strictPort: false,
		allowedHosts: [
			"devserver-preview--niawebsitefinal.netlify.app",
			"localhost",
			"127.0.0.1",
			"0.0.0.0"
		],
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
		}
	},
	preview: {
		host: "0.0.0.0",
		port: 4173,
		strictPort: false,
		allowedHosts: [
			"devserver-preview--niawebsitefinal.netlify.app",
			"localhost",
			"127.0.0.1",
			"0.0.0.0"
		]
	}
});
