import { Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
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
});
