/**
 * @type {import('@types/eslint').ESLint.ConfigData}
 */
module.exports = {
	extends: "./.eslintrc.js",

	overrides: [
		{
			files: ['package.json'],
			plugins: ['eslint-plugin-flowease-nodes-base'],
			rules: {
				'flowease-nodes-base/community-package-json-name-still-default': 'error',
			},
		},
	],
};
