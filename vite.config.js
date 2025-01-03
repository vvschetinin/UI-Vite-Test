import path from "path";
import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import CleanCss from "vite-plugin-clean-css";

export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	plugins: [
		CleanCss({
			level: 2,
		}),
	],
	css: {
		devSourcemap: true,
		postcss: {
			plugins: [autoprefixer],
		},
	},
});
