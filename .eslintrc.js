/**
 * @type {import('@types/eslint').ESLint.ConfigData}
 */
module.exports = {
	root: true,

	env: {
		browser: true,
		es6: true,
		node: true,
	},

	parser: '@typescript-eslint/parser',

	parserOptions: {
		project: ['./tsconfig.json'],
		sourceType: 'module',
		extraFileExtensions: ['.json'],
	},

	ignorePatterns: ['.eslintrc.js', '**/*.js', '**/node_modules/**', '**/dist/**'],

	overrides: [
		{
			files: ['package.json'],
			plugins: ['eslint-plugin-flowease-nodes-base'],
			extends: ['plugin:flowease-nodes-base/community'],
			rules: {
				'flowease-nodes-base/community-package-json-name-still-default': 'off',
			},
		},
		{
			files: ['./credentials/**/*.ts'],
			plugins: ['eslint-plugin-flowease-nodes-base'],
			extends: ['plugin:flowease-nodes-base/credentials'],
			rules: {
				'flowease-nodes-base/cred-class-field-documentation-url-missing': 'off',
				'flowease-nodes-base/cred-class-field-documentation-url-miscased': 'off',
			},
		},
		{
			files: ['./nodes/**/*.ts'],
			plugins: ['eslint-plugin-flowease-nodes-base'],
			extends: ['plugin:flowease-nodes-base/nodes'],
			rules: {
				'flowease-nodes-base/node-execute-block-missing-continue-on-fail': 'off',
				'flowease-nodes-base/node-resource-description-filename-against-convention': 'off',
				'flowease-nodes-base/node-param-fixed-collection-type-unsorted-items': 'off',
			},
		},
	],
};
