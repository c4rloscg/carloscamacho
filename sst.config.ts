import { CachePolicy } from "aws-cdk-lib/aws-cloudfront";
import { Duration } from "aws-cdk-lib/core";
import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "carloscamacho-cc",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        customDomain:
          stack.stage === "production"
            ? {
                domainName: "carloscamacho.cc",
                domainAlias: "www.carloscamacho.cc",
              }
            : undefined,
        cdk: {
          serverCachePolicy: new CachePolicy(
            stack,
            "CarlosCamachoCC-DynamicServerCache",
            {
              defaultTtl: Duration.days(7),
              maxTtl: Duration.days(7),
              minTtl: Duration.days(7),
            }
          ),
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
