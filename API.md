# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StringParameter <a name="StringParameter" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter"></a>

- *Implements:* constructs.IConstruct, constructs.IDependable, aws-cdk-lib.IResource, aws-cdk-lib.interfaces.IEnvironmentAware, aws-cdk-lib.aws_ssm.IStringParameter, aws-cdk-lib.interfaces.aws_ssm.IParameterRef, aws-cdk-lib.aws_ssm.IParameter

#### Initializers <a name="Initializers" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.Initializer"></a>

```typescript
import { StringParameter } from '@pepperize/cdk-ssm-parameters-cross-region'

new StringParameter(scope: Construct, id: string, props: StringParameterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps">StringParameterProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps">StringParameterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.applyCrossStackReferenceStrength">applyCrossStackReferenceStrength</a></code> | Override the cross-stack reference strength for this resource. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.grantRead">grantRead</a></code> | Grants read (DescribeParameter, GetParameters, GetParameter, GetParameterHistory) permissions on the SSM Parameter. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.grantWrite">grantWrite</a></code> | Grants write (PutParameter) permissions on the SSM Parameter. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

---

##### `applyCrossStackReferenceStrength` <a name="applyCrossStackReferenceStrength" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.applyCrossStackReferenceStrength"></a>

```typescript
public applyCrossStackReferenceStrength(strength: ReferenceStrength): void
```

Override the cross-stack reference strength for this resource.

When set, any cross-stack reference to this resource will use the specified
mechanism instead of the global default determined by the
`@aws-cdk/core:defaultCrossStackReferences` context key. This is useful for
selectively weakening specific references to avoid the "deadly embrace" problem
without changing the app-wide default.

###### `strength`<sup>Required</sup> <a name="strength" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.applyCrossStackReferenceStrength.parameter.strength"></a>

- *Type:* aws-cdk-lib.ReferenceStrength

The reference strength to use for this resource.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `grantRead` <a name="grantRead" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.grantRead"></a>

```typescript
public grantRead(grantee: IGrantable): Grant
```

Grants read (DescribeParameter, GetParameters, GetParameter, GetParameterHistory) permissions on the SSM Parameter.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantWrite` <a name="grantWrite" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.grantWrite"></a>

```typescript
public grantWrite(grantee: IGrantable): Grant
```

Grants write (PutParameter) permissions on the SSM Parameter.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.grantWrite.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterAttributes">fromStringParameterAttributes</a></code> | Imports an external string parameter with name and optional version. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterName">fromStringParameterName</a></code> | Imports an external string parameter by name and region. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.valueFromLookup">valueFromLookup</a></code> | Reads the value of an SSM parameter during synthesis through an environmental context provider. |

---

##### `isConstruct` <a name="isConstruct" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.isConstruct"></a>

```typescript
import { StringParameter } from '@pepperize/cdk-ssm-parameters-cross-region'

StringParameter.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.isOwnedResource"></a>

```typescript
import { StringParameter } from '@pepperize/cdk-ssm-parameters-cross-region'

StringParameter.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.isResource"></a>

```typescript
import { StringParameter } from '@pepperize/cdk-ssm-parameters-cross-region'

StringParameter.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromStringParameterAttributes` <a name="fromStringParameterAttributes" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterAttributes"></a>

```typescript
import { StringParameter } from '@pepperize/cdk-ssm-parameters-cross-region'

StringParameter.fromStringParameterAttributes(scope: Construct, id: string, attrs: StringParameterAttributes)
```

Imports an external string parameter with name and optional version.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterAttributes.parameter.attrs"></a>

- *Type:* <a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameterAttributes">StringParameterAttributes</a>

---

##### `fromStringParameterName` <a name="fromStringParameterName" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterName"></a>

```typescript
import { StringParameter } from '@pepperize/cdk-ssm-parameters-cross-region'

StringParameter.fromStringParameterName(scope: Construct, id: string, region: string, parameterName: string)
```

Imports an external string parameter by name and region.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterName.parameter.id"></a>

- *Type:* string

---

###### `region`<sup>Required</sup> <a name="region" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterName.parameter.region"></a>

- *Type:* string

---

###### `parameterName`<sup>Required</sup> <a name="parameterName" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterName.parameter.parameterName"></a>

- *Type:* string

---

##### `valueFromLookup` <a name="valueFromLookup" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.valueFromLookup"></a>

```typescript
import { StringParameter } from '@pepperize/cdk-ssm-parameters-cross-region'

StringParameter.valueFromLookup(scope: Construct, region: string, parameterName: string)
```

Reads the value of an SSM parameter during synthesis through an environmental context provider.

Requires that the stack this scope is defined in will have explicit
account information. Otherwise, it will fail during synthesis.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.valueFromLookup.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `region`<sup>Required</sup> <a name="region" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.valueFromLookup.parameter.region"></a>

- *Type:* string

---

###### `parameterName`<sup>Required</sup> <a name="parameterName" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.valueFromLookup.parameter.parameterName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.property.parameterArn">parameterArn</a></code> | <code>string</code> | The ARN of the SSM Parameter resource. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.property.parameterName">parameterName</a></code> | <code>string</code> | The name of the SSM Parameter resource. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.property.parameterRef">parameterRef</a></code> | <code>aws-cdk-lib.interfaces.aws_ssm.ParameterReference</code> | A reference to a Parameter resource. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.property.parameterType">parameterType</a></code> | <code>string</code> | The type of the SSM Parameter resource. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.property.stringValue">stringValue</a></code> | <code>string</code> | The parameter value. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameter.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `parameterArn`<sup>Required</sup> <a name="parameterArn" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.property.parameterArn"></a>

```typescript
public readonly parameterArn: string;
```

- *Type:* string

The ARN of the SSM Parameter resource.

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

The name of the SSM Parameter resource.

---

##### `parameterRef`<sup>Required</sup> <a name="parameterRef" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.property.parameterRef"></a>

```typescript
public readonly parameterRef: ParameterReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_ssm.ParameterReference

A reference to a Parameter resource.

---

##### `parameterType`<sup>Required</sup> <a name="parameterType" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.property.parameterType"></a>

```typescript
public readonly parameterType: string;
```

- *Type:* string

The type of the SSM Parameter resource.

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

The parameter value.

Value must not nest another parameter. Do not use {{}} in the value.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameter.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

---


## Structs <a name="Structs" id="Structs"></a>

### StringParameterAttributes <a name="StringParameterAttributes" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterAttributes"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterAttributes.Initializer"></a>

```typescript
import { StringParameterAttributes } from '@pepperize/cdk-ssm-parameters-cross-region'

const stringParameterAttributes: StringParameterAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.parameterName">parameterName</a></code> | <code>string</code> | The name of the parameter store value. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.simpleName">simpleName</a></code> | <code>boolean</code> | Indicates whether the parameter name is a simple name. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.forceDynamicReference">forceDynamicReference</a></code> | <code>boolean</code> | Use a dynamic reference as the representation in CloudFormation template level. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.type">type</a></code> | <code>aws-cdk-lib.aws_ssm.ParameterType</code> | The type of the string parameter. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.valueType">valueType</a></code> | <code>aws-cdk-lib.aws_ssm.ParameterValueType</code> | The type of the string parameter value. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.version">version</a></code> | <code>number</code> | The version number of the value you wish to retrieve. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.region">region</a></code> | <code>string</code> | The region to retrieve the parameter from. |

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

The name of the parameter store value.

This value can be a token or a concrete string. If it is a concrete string
and includes "/" it must also be prefixed with a "/" (fully-qualified).

---

##### `simpleName`<sup>Optional</sup> <a name="simpleName" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.simpleName"></a>

```typescript
public readonly simpleName: boolean;
```

- *Type:* boolean
- *Default:* auto-detect based on `parameterName`

Indicates whether the parameter name is a simple name.

A parameter name
without any "/" is considered a simple name. If the parameter name includes
"/", setting simpleName to true might cause unintended issues such
as duplicate "/" in the resulting ARN.

This is required only if `parameterName` is a token, which means we
are unable to detect if the name is simple or "path-like" for the purpose
of rendering SSM parameter ARNs.

If `parameterName` is not specified, `simpleName` must be `true` (or
undefined) since the name generated by AWS CloudFormation is always a
simple name.

---

##### `forceDynamicReference`<sup>Optional</sup> <a name="forceDynamicReference" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.forceDynamicReference"></a>

```typescript
public readonly forceDynamicReference: boolean;
```

- *Type:* boolean
- *Default:* false

Use a dynamic reference as the representation in CloudFormation template level.

By default, CDK tries to deduce an appropriate representation based on the parameter value (a CfnParameter or a dynamic reference). Use this flag to override the representation when it does not work.

---

##### ~~`type`~~<sup>Optional</sup> <a name="type" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.type"></a>

- *Deprecated:* - use valueType instead

```typescript
public readonly type: ParameterType;
```

- *Type:* aws-cdk-lib.aws_ssm.ParameterType
- *Default:* ParameterType.STRING

The type of the string parameter.

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.valueType"></a>

```typescript
public readonly valueType: ParameterValueType;
```

- *Type:* aws-cdk-lib.aws_ssm.ParameterValueType
- *Default:* ParameterValueType.STRING

The type of the string parameter value.

Using specific types can be helpful in catching invalid values
at the start of creating or updating a stack. CloudFormation validates
the values against existing values in the account.

Note - if you want to allow values from different AWS accounts, use
ParameterValueType.STRING

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html#aws-ssm-parameter-types](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html#aws-ssm-parameter-types)

---

##### `version`<sup>Optional</sup> <a name="version" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number
- *Default:* The latest version will be retrieved.

The version number of the value you wish to retrieve.

---

##### `region`<sup>Required</sup> <a name="region" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region to retrieve the parameter from.

See AWS.SSM.region for more information.

---

### StringParameterProps <a name="StringParameterProps" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps"></a>

Properties needed to create a String SSM parameter.

#### Initializer <a name="Initializer" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps.Initializer"></a>

```typescript
import { StringParameterProps } from '@pepperize/cdk-ssm-parameters-cross-region'

const stringParameterProps: StringParameterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps.property.parameterName">parameterName</a></code> | <code>string</code> | The name of the parameter. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps.property.region">region</a></code> | <code>string</code> | The region to create the parameter in. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps.property.stringValue">stringValue</a></code> | <code>string</code> | The value of the parameter. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps.property.allowedPattern">allowedPattern</a></code> | <code>string</code> | A regular expression used to validate the parameter value. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps.property.dataType">dataType</a></code> | <code>aws-cdk-lib.aws_ssm.ParameterDataType</code> | The data type of the parameter, such as `text` or `aws:ec2:image`. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps.property.description">description</a></code> | <code>string</code> | Information about the parameter that you want to add to the system. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Whether to retain or delete the parameter on CloudFormation delete event. |
| <code><a href="#@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps.property.tier">tier</a></code> | <code>aws-cdk-lib.aws_ssm.ParameterTier</code> | The tier of the string parameter. |

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string
- *Default:* a name will be generated by CloudFormation

The name of the parameter.

It may not be a

---

##### `region`<sup>Required</sup> <a name="region" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region to create the parameter in.

See AWS.SSM.region for more information.

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

The value of the parameter.

It may not reference another parameter and ``{{}}`` cannot be used in the value.

---

##### `allowedPattern`<sup>Optional</sup> <a name="allowedPattern" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps.property.allowedPattern"></a>

```typescript
public readonly allowedPattern: string;
```

- *Type:* string
- *Default:* undefined, no validation is performed

A regular expression used to validate the parameter value.

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps.property.dataType"></a>

```typescript
public readonly dataType: ParameterDataType;
```

- *Type:* aws-cdk-lib.aws_ssm.ParameterDataType
- *Default:* undefined

The data type of the parameter, such as `text` or `aws:ec2:image`.

---

##### `description`<sup>Optional</sup> <a name="description" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

Information about the parameter that you want to add to the system.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* DESTROY

Whether to retain or delete the parameter on CloudFormation delete event.

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@pepperize/cdk-ssm-parameters-cross-region.StringParameterProps.property.tier"></a>

```typescript
public readonly tier: ParameterTier;
```

- *Type:* aws-cdk-lib.aws_ssm.ParameterTier
- *Default:* undefined

The tier of the string parameter.

---



