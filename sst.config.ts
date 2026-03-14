/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "carloscamacho-cc",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const site = new sst.aws.StaticSite("site", {
      build: {
        command: "bun run build",
        output: "dist",
      },
      errorPage: "redirect_to_index_page",
      domain:
        $app.stage === "production"
          ? {
              name: "carloscamacho.cc",
              aliases: ["www.carloscamacho.cc"],
            }
          : undefined,
    });

    return { url: site.url };
  },
});
