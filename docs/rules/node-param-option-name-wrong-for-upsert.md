[//]: # "File generated from a template. Do not edit this file directly."

# node-param-option-name-wrong-for-upsert

Option `name` for Upsert node parameter must be `Create or Update`.

📋 This rule is part of the `plugin:flowease-nodes-base/nodes` config.

🔧 Run ESLint with `--fix` option to autofix the issue flagged by this rule.

## Examples

❌ Example of **incorrect** code:

```js
const test = {
	name: "Insert or Create",
	value: "upsert",
};
```

✅ Example of **correct** code:

```js
const test = {
	name: "Create or Update",
	value: "upsert",
};
```

## Links

- [Rule source](../../lib/rules/node-param-option-name-wrong-for-upsert.ts)
- [Test source](../../tests/node-param-option-name-wrong-for-upsert.test.ts)
