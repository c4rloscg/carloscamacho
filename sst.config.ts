import type { SSTConfig } from "sst";
import { StaticSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "carloscamacho-cc",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new StaticSite(stack, "site", {
        path: ".",
        buildOutput: "dist",
        buildCommand: "npm run build",
        errorPage: "redirect_to_index_page",
        customDomain:
          stack.stage === "production"
            ? {
                domainName: "carloscamacho.cc",
                domainAlias: "www.carloscamacho.cc",
              }
            : undefined,
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
