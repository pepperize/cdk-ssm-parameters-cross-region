[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
[![GitHub](https://img.shields.io/github/license/pepperize/cdk-ssm-parameters-cross-region?style=flat-square)](https://github.com/pepperize/cdk-ssm-parameters-cross-region/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@pepperize/cdk-ssm-parameters-cross-region?style=flat-square)](https://www.npmjs.com/package/@pepperize/cdk-ssm-parameters-cross-region)
[![PyPI](https://img.shields.io/pypi/v/pepperize.cdk-ssm-parameters-cross-region?style=flat-square)](https://pypi.org/project/pepperize.cdk-ssm-parameters-cross-region/)
[![Nuget](https://img.shields.io/nuget/v/Pepperize.CDK.SsmParametersCrossRegion?style=flat-square)](https://www.nuget.org/packages/Pepperize.CDK.SsmParametersCrossRegion/)
[![Sonatype Nexus (Releases)](https://img.shields.io/nexus/r/com.pepperize/cdk-ssm-parameters-cross-region?server=https%3A%2F%2Fs01.oss.sonatype.org%2F&style=flat-square)](https://s01.oss.sonatype.org/content/repositories/releases/com/pepperize/cdk-ssm-parameters-cross-region/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/pepperize/cdk-ssm-parameters-cross-region/release.yml?branch=main&label=release&style=flat-square)](https://github.com/pepperize/cdk-ssm-parameters-cross-region/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pepperize/cdk-ssm-parameters-cross-region?sort=semver&style=flat-square)](https://github.com/pepperize/cdk-ssm-parameters-cross-region/releases)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/pepperize/cdk-ssm-parameters-cross-region)

# CDK SSM Parameters cross-region

Store, read and lookup AWS SSM Parameters cross-region

> Currently, only supports StringParameter except simple name. Implements `aws_ssm.IParameter` and can be used as `aws_ssm.StringParameter` replacement.

## Install

### TypeScript

```shell
npm install @pepperize/cdk-ssm-parameters-cross-region
```

or

```shell
yarn add @pepperize/cdk-ssm-parameters-cross-region
```

### Python

```shell
pip install pepperize.cdk-ssm-parameters-cross-region
```

### C\# / .Net

```
dotnet add package Pepperize.CDK.SsmParametersCrossRegion
```

### Java

```xml
<dependency>
  <groupId>com.pepperize</groupId>
  <artifactId>cdk-ssm-parameters-cross-region</artifactId>
  <version>${cdkSsmParametersCrossRegion.version}</version>
</dependency>
```

## Usage

### Store AWS SSM Parameter cross-region

```typescript
new StringParameter(scope, "PutParameter", {
  region: "eu-central-1",
  parameterName: "/path/name/example",
  stringValue: "Say hello from another region",
});
```

See [StringParameter](https://github.com/pepperize/cdk-ssm-parameters-cross-region/blob/main//API.md#stringparameter-)

### Read AWS SSM Parameter cross-region

```typescript
StringParameter.fromStringParameterName(scope, "GetParameter", "eu-central-1", "/path/name/example");
```

See [StringParameter.fromStringParameterName](https://github.com/pepperize/cdk-ssm-parameters-cross-region/blob/main//API.md#fromstringparametername-)

### Lookup AWS SSM Parameter cross-region

```typescript
StringParameter.valueFromLookup(scope, "eu-central-1", "/path/name/example");
```

See [StringParameter.valueFromLookup](https://github.com/pepperize/cdk-ssm-parameters-cross-region/blob/main//API.md#valuefromlookup-)
