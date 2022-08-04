import { Resource } from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import * as ssm from "aws-cdk-lib/aws-ssm";
/**
 * Properties needed to create a new SSM Parameter.
 *
 * @internal
 */
export interface ParameterOptions {
  /**
   * A regular expression used to validate the parameter value.
   *
   * @default - undefined, no validation is performed
   */
  readonly allowedPattern?: string;
  /**
   * Information about the parameter that you want to add to the system.
   *
   * @default - undefined
   */
  readonly description?: string;
  /**
   * The name of the parameter.
   */
  readonly parameterName: string;
  /**
   * The tier of the string parameter.
   *
   * @default - undefined
   */
  readonly tier?: ssm.ParameterTier;
}

/**
 * Basic features shared across all types of SSM Parameters cross region.
 *
 * @internal
 */
export abstract class ParameterBase extends Resource implements ssm.IParameter {
  public abstract readonly parameterArn: string;
  public abstract readonly parameterName: string;
  public abstract readonly parameterType: string;

  public grantRead(grantee: iam.IGrantable): iam.Grant {
    return iam.Grant.addToPrincipal({
      grantee,
      actions: ["ssm:DescribeParameters", "ssm:GetParameters", "ssm:GetParameter", "ssm:GetParameterHistory"],
      resourceArns: [this.parameterArn],
    });
  }

  public grantWrite(grantee: iam.IGrantable): iam.Grant {
    return iam.Grant.addToPrincipal({
      grantee,
      actions: ["ssm:PutParameter"],
      resourceArns: [this.parameterArn],
    });
  }
}
