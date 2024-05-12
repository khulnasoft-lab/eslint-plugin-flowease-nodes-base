const RULESET = [
	// "plugin:flowease-nodes-base/credentials",
	// "plugin:flowease-nodes-base/nodes",
	// "plugin:flowease-nodes-base/community",
];

const RULES = {
	"flowease-nodes-base/node-param-type-options-password-missing": "error",
	// "flowease-nodes-base/cred-class-field-type-options-password-missing": "error",
	// "flowease-nodes-base/cred-class-field-placeholder-url-missing-eg": "error",
	// "flowease-nodes-base/node-class-description-name-miscased": "error",
	// "flowease-nodes-base/community-package-json-license-missing": "error",
};

module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
		extraFileExtensions: [".json"], // for community rules
	},
	ignorePatterns: ["tsconfig.json"],
	plugins: ["eslint-plugin-flowease-nodes-base"],
	...(RULESET.length > 0 ? { extends: RULESET } : {}),
	...(Object.keys(RULES).length > 0 ? { rules: RULES } : {}),
};
