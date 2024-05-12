[//]: # "File generated from a template. Do not edit this file directly."

# node-param-display-name-wrong-for-dynamic-multi-options

`displayName` for dynamic-multi-options-type node parameter must end with `Names or IDs`

📋 This rule is part of the `plugin:flowease-nodes-base/nodes` config.

🔧 Run ESLint with `--fix` option to autofix the issue flagged by this rule.

## Examples

❌ Example of **incorrect** code:

```js
const test = {
	displayName: "Fields",
	name: "field",
	type: "multiOptions",
	typeOptions: {
		loadOptionsMethod: "getFields",
	},
	default: "",
};

const test = {
	displayName: "Field",
	name: "field",
	type: "multiOptions",
	typeOptions: {
		loadOptionsMethod: "getFields",
	},
	default: "",
};

const test = {
	displayName: "Fields Name or ID",
	name: "field",
	type: "multiOptions",
	typeOptions: {
		loadOptionsMethod: "getFields",
	},
	default: "",
};

const test = {
	displayName: "Custom Schemas",
	name: "customSchema",
	type: "multiOptions",
	typeOptions: {
		loadOptionsMethod: "getSchemas",
	},
	default: "",
};
```

✅ Example of **correct** code:

```js
const test = {
	displayName: "Field Names or IDs",
	name: "field",
	type: "multiOptions",
	typeOptions: {
		loadOptionsMethod: "getFields",
	},
	default: "",
};

const test = {
	displayName: "Properties with History",
	name: "field",
	type: "multiOptions",
	typeOptions: {
		loadOptionsMethod: "getProperties",
	},
	default: "",
};
```

## Links

- [Rule source](../../lib/rules/node-param-display-name-wrong-for-dynamic-multi-options.ts)
- [Test source](../../tests/node-param-display-name-wrong-for-dynamic-multi-options.test.ts)