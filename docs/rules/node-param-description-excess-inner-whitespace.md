[//]: # "File generated from a template. Do not edit this file directly."

# node-param-description-excess-inner-whitespace

`description` in node parameter must not contain excess inner whitespace. Applicable by extension to `description` in option in options-type and multi-options-type node parameter.

📋 This rule is part of the `plugin:flowease-nodes-base/nodes` config.

🔧 Run ESLint with `--fix` option to autofix the issue flagged by this rule.

## Examples

❌ Example of **incorrect** code:

```js
const test = {
	displayName: "Test",
	name: "test",
	type: "string",
	default: "",
	description: "This a  sentence",
};

const test = {
	displayName: "Row ID",
	name: "rowId",
	type: "string",
	required: true,
	default: "",
	displayOptions: {
		show: {
			resource: ["table"],
			operation: ["getRow"],
		},
	},
	description: `ID or name of the row. Names are discouraged because
    they're easily prone to being changed by users. If you're
    using a name, be sure to URI-encode it. If there are
    multiple rows with the same value in the identifying column,
    an arbitrary one will be selected`,
};

const test = {
	displayName: "Incident Key",
	name: "incidentKey",
	type: "string",
	default: "",
	description: `Sending subsequent requests referencing the same service and with the same incident_key
                will result in those requests being rejected if an open incident matches that incident_key.`,
};

const test = {
	name: "User ID",
	value: "userId",
	description: "The ID    of the user",
};
```

✅ Example of **correct** code:

```js
const test = {
	displayName: "Test",
	name: "test",
	type: "string",
	default: "",
	description: "This a sentence",
};

const test = {
	name: "User ID",
	value: "userId",
	description: "The ID of the user",
};

const test = {
	displayName: "Access Token",
	name: "accessToken",
	type: "string",
	default: "",
	description: `The access token must have the following scopes:
    <ul>
        <li>Create/modify webhooks</li>
        <li>View webhooks</li>
        <li>View surveys</li>
        <li>View collectors</li>
        <li>View responses</li>
        <li>View response details</li>
    </ul>`,
};
```

## Links

- [Rule source](../../lib/rules/node-param-description-excess-inner-whitespace.ts)
- [Test source](../../tests/node-param-description-excess-inner-whitespace.test.ts)