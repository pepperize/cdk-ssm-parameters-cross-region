import { Token } from "aws-cdk-lib";

export class Validators {
  /**
   * Validates whether a supplied value conforms to the allowedPattern, granted neither is an unresolved token.
   *
   * @param value          the value to be validated.
   * @param allowedPattern the regular expression to use for validation.
   *
   * @throws if the ``value`` does not conform to the ``allowedPattern`` and neither is an unresolved token (per
   *         ``cdk.unresolved``).
   */
  public static parameterValue(value: string, allowedPattern: string): void {
    if (Token.isUnresolved(value) || Token.isUnresolved(allowedPattern)) {
      // Unable to perform validations against unresolved tokens
      return;
    }
    if (!new RegExp(allowedPattern).test(value)) {
      throw new Error(`The supplied value (${value}) does not match the specified allowedPattern (${allowedPattern})`);
    }
  }

  public static parameterName(parameterName: string) {
    if (Token.isUnresolved(parameterName)) {
      throw new Error(
        "Unable to determine parameter name for SSM parameter since the parameter name is an unresolved token."
      );
    }
    if (parameterName.length > 2048) {
      throw new Error("Name cannot be longer than 2048 characters.");
    }
    if (!parameterName.match(/^\/[\/\w.-]+$/)) {
      throw new Error(
        `Name must begin with / and must only contain letters, numbers, and the following 4 symbols .-_/; got ${parameterName}`
      );
    }
  }

  public static description(description?: string) {
    if (description && description?.length > 1024) {
      throw new Error("Description cannot be longer than 1024 characters.");
    }
  }
}
