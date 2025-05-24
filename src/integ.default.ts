import { App, Environment, Stack } from "aws-cdk-lib";
import { StringParameter } from "./string-parameter";

// export CDK_DEFAULT_REGION=us-east-1
// export CDK_DEFAULT_ACCOUNT=123456789012
// cdk deploy --app 'npx ts-node -P tsconfig.json --prefer-ts-exts ./src/integ.default.ts'

const app = new App();

const env: Environment = {
  region: process.env.CDK_DEFAULT_REGION,
  account: process.env.CDK_DEFAULT_ACCOUNT,
};

const stack = new Stack(app, "SsmParameterCrossRegionIntegrationTest", { env: env });

const putParameter = new StringParameter(stack, "PutParameter", {
  region: "eu-central-1",
  parameterName: "/path/name/integ/test",
  stringValue: "Say hello from another region",
});
const getParameter = StringParameter.fromStringParameterName(
  stack,
  "GetParameter",
  "eu-central-1",
  "/path/name/integ/test"
);
getParameter.node.addDependency(putParameter);

const arn = stack.formatArn({
  service: "ssm",
  resource: `parameter/path/name/integ/test`,
  region: "eu-central-1",
  account: env.account,
});
const getByArn = StringParameter.fromStringParameterArn(stack, "GetParameterByArn", arn);
getByArn.node.addDependency(putParameter);

app.synth();
