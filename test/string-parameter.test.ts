import { CfnParameter, Stack, Tags } from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import { StringParameter } from "../src";

describe("StringParameter", () => {
  it("Should create and import parameter", () => {
    // Given
    const stack = new Stack();

    // When
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

    // Then
    const template = Template.fromStack(stack);
    expect(template).toMatchSnapshot();
  });

  it("Should expose parameterRef", () => {
    // Given
    const stack = new Stack();

    // When
    const putParameter = new StringParameter(stack, "PutParameter", {
      region: "eu-central-1",
      parameterName: "/path/name",
      stringValue: "value",
    });
    const getParameter = StringParameter.fromStringParameterName(stack, "GetParameter", "eu-central-1", "/path/name");

    // Then
    expect(putParameter.parameterRef).toEqual({
      parameterName: "/path/name",
      parameterArn: putParameter.parameterArn,
    });
    expect(getParameter.parameterRef).toEqual({
      parameterName: "/path/name",
      parameterArn: getParameter.parameterArn,
    });
  });

  it("Should allow tagging the parameter", () => {
    // Given
    const stack = new Stack();

    // When
    const parameter = new StringParameter(stack, "PutParameter", {
      region: "eu-central-1",
      parameterName: "/path/name",
      stringValue: "value",
    });
    Tags.of(parameter).add("key", "value");

    // Then
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::IAM::Policy", {
      PolicyDocument: {
        Statement: Match.arrayWith([
          Match.objectLike({
            Action: "ssm:AddTagsToResource",
            Effect: "Allow",
          }),
        ]),
      },
    });
  });

  it("Should import parameter by arn", () => {
    // Given
    const stack = new Stack();
    const arn = "arn:aws:ssm:eu-central-1:123456789012:parameter/path/name";

    // When
    const parameter = StringParameter.fromStringParameterArn(stack, "GetParameter", arn);

    // Then
    expect(parameter.parameterArn).toEqual(arn);
    expect(parameter.parameterName).toEqual("/path/name");
    const template = Template.fromStack(stack);
    template.hasResourceProperties("Custom::SSM_String_Parameter_Cross_Region", {
      Create: Match.stringLikeRegexp(
        `"region":"eu-central-1","service":"SSM","action":"getParameter","parameters":{"Name":"${arn}"}`
      ),
    });
  });

  it("Should import parameter with simple name by arn", () => {
    // Given
    const stack = new Stack();

    // When
    const parameter = StringParameter.fromStringParameterArn(
      stack,
      "GetParameter",
      "arn:aws:ssm:eu-central-1:123456789012:parameter/name"
    );

    // Then
    expect(parameter.parameterName).toEqual("name");
  });

  it("Should not import parameter by unresolved arn", () => {
    // Given
    const stack = new Stack();
    const arn = new CfnParameter(stack, "Arn").valueAsString;

    // When
    const fn = () => StringParameter.fromStringParameterArn(stack, "GetParameter", arn);

    // Then
    expect(fn).toThrow(/parameterArn must not be a token, except for partition and account/);
  });

  it("Should import parameter by formatted arn", () => {
    // Given
    const stack = new Stack();
    const arn = stack.formatArn({
      service: "ssm",
      resource: "parameter/path/name",
      region: "eu-central-1",
      account: "123456789012",
    });

    // When
    const parameter = StringParameter.fromStringParameterArn(stack, "GetParameter", arn);

    // Then
    expect(parameter.parameterArn).toEqual(arn);
    expect(parameter.parameterName).toEqual("/path/name");
  });
});
