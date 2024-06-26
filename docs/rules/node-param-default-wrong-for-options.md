[//]: # "File generated from a template. Do not edit this file directly."

# node-param-default-wrong-for-options

`default` for an options-type node parameter must be one of the options.

📋 This rule is part of the `plugin:flowease-nodes-base/nodes` config.

🔧 Run ESLint with `--fix` option to autofix the issue flagged by this rule.

## Examples

❌ Example of **incorrect** code:

```js
const test = {
	displayName: "Test",
	name: "test",
	type: "options",
	options: [
		{
			name: "Minus One",
			value: -1,
		},
		{
			name: "Zero",
			value: 0,
		},
		{
			name: "One",
			value: 1,
		},
	],
	default: "",
};

const test = {
	displayName: "Test",
	name: "test",
	type: "options",
	default: "wrong",
	options: [
		{
			name: "First",
			value: "first",
		},
		{
			name: "Second",
			value: "second",
		},
	],
};

const test = {
	displayName: "Test",
	name: "test",
	type: "options",
	default: "wrong",
};
```

✅ Example of **correct** code:

```js
const test = {
	displayName: "Test",
	name: "test",
	type: "options",
	default: "first",
	options: [
		{
			name: "First",
			value: "first",
		},
		{
			name: "Second",
			value: "second",
		},
	],
};

const allCurrencies = [];
const test = {
	displayName: "Currency",
	name: "currency",
	type: "options",
	default: "eur",
	options: allCurrencies,
};

const MY_CONSTANT = { a: 1, b: 2 };
const test = {
	displayName: "User",
	name: "currency",
	type: "options",
	default: "eur",
	options: [
		{
			name: "a",
			value: MY_CONSTANT.a,
		},
		{
			name: "a",
			value: MY_CONSTANT.b,
		},
	],
};
```

## Links

- [Rule source](../../lib/rules/node-param-default-wrong-for-options.ts)
- [Test source](../../tests/node-param-default-wrong-for-options.test.ts)
