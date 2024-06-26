[//]: # "File generated from a template. Do not edit this file directly."

# node-param-placeholder-miscased-id

`ID` in `placeholder` in node parameter must be fully uppercased.

📋 This rule is part of the `plugin:flowease-nodes-base/nodes` config.

🔧 Run ESLint with `--fix` option to autofix the issue flagged by this rule.

## Examples

❌ Example of **incorrect** code:

```js
const test = {
	displayName: "Value ID",
	name: "valueId",
	type: "string",
	default: "",
	placeholder: "The Id of the value",
};

const test = {
	displayName: "Value ID",
	name: "valueId",
	type: "string",
	default: "",
	placeholder: "The ids of the value",
};

const test = {
	displayName: "Value ID",
	name: "valueId",
	type: "string",
	default: "",
	placeholder: "The id of the value",
};
```

✅ Example of **correct** code:

```js
const test = {
	displayName: "Value ID",
	name: "valueId",
	type: "string",
	default: "",
	placeholder: "The ID of the value",
};

const test = {
	displayName: "Value ID",
	name: "valueId",
	type: "string",
	default: "",
	placeholder: "id,name,description",
};

const test = {
	displayName: "Value ID",
	name: "valueId",
	type: "string",
	default: "",
	placeholder:
		"SELECT id, name FROM product WHERE quantity > $1 AND price <= $2",
};
```

## Links

- [Rule source](../../lib/rules/node-param-placeholder-miscased-id.ts)
- [Test source](../../tests/node-param-placeholder-miscased-id.test.ts)
