import { AwsCdkConstructLibrary } from "@pepperize/projen-awscdk-construct";
import { javascript } from "projen";

const project = new AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  cdkVersion: "2.278.0",
  jsiiVersion: "~6.0.0",
  devDeps: ["@pepperize/projen-awscdk-construct@~0.1.2", "@types/node@^22", "typescript@~6.0"],
  name: "@pepperize/cdk-ssm-parameters-cross-region",
  description: "Store, read and lookup AWS SSM Parameters cross-region",
  keywords: ["aws", "cdk", "ssm", "parameter", "parameter-store", "cross-region", "utilities"],
  repositoryUrl: "https://github.com/pepperize/cdk-ssm-parameters-cross-region.git",

  projenrcTs: true,
  minNodeVersion: "22.13.0",
  workflowNodeVersion: "24.x",
  jestOptions: {
    jestVersion: "^30",
  },
  packageManager: javascript.NodePackageManager.YARN_CLASSIC,

  defaultReleaseBranch: "main",
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  publishToNuget: {
    dotNetNamespace: "Pepperize.CDK",
    packageId: "Pepperize.CDK.SsmParametersCrossRegion",
  },
  publishToPypi: {
    distName: "pepperize.cdk-ssm-parameters-cross-region",
    module: "pepperize_cdk_ssm_parameters_cross_region",
  },
  publishToMaven: {
    mavenGroupId: "com.pepperize",
    mavenArtifactId: "cdk-ssm-parameters-cross-region",
    javaPackage: "com.pepperize.cdk.ssm_parameters_cross_region",
  },

  gitpod: true,
});

project.gitpod?.addCustomTask({
  name: "setup",
  init: "yarn install && npx projen build",
  command: "npx projen watch",
});

project.gitpod?.addVscodeExtensions("dbaeumer.vscode-eslint");

project.synth();
