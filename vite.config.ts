import path from "node:path";
import url from "node:url";

import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import viteTsConfigPaths from "vite-tsconfig-paths";

import type { BuildEnvironmentOptions } from "vite";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientBuildConfig: BuildEnvironmentOptions = {
	lib: {
		entry: path.resolve(__dirname, "src/index.ts"),
		formats: ["es"],
		fileName: (_, name) => `${name}.js`
	},
	rollupOptions: {
		external: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
		output: {
			preserveModules: true,
			preserveModulesRoot: "src"
		}
	}
};

const config = defineConfig(() => {
	return {
		plugins: [
			viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
			viteReact(),
			dts({
				entryRoot: "src",
				// outDir: "types",
				insertTypesEntry: true
				// rollupTypes: true
			})
		],
		build: clientBuildConfig
	};
});

export default config;
