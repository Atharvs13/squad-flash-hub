import { defineConfig as baseDefineConfig } from "@lovable.dev/vite-tanstack-config";

const configFn = baseDefineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});

export default async (env: any) => {
  const config = await configFn(env);

  if (config.plugins) { 
    const removeDevtools = (plugins: any[]): any[] => {
      return plugins
        .map((p) => (Array.isArray(p) ? removeDevtools(p) : p))
        .filter((p) => {
          if (!p) return false;
          if (Array.isArray(p)) return p.length > 0;

          const name = p.name || "";
          return !(
            typeof name === "string" &&
            name.startsWith("@tanstack/devtools")
          );
        });
    };

    config.plugins = removeDevtools(config.plugins);
  }

  return config;
};