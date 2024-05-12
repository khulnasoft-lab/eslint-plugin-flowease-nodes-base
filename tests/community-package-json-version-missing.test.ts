import rule from "../lib/rules/community-package-json-version-missing";
import { getRuleName } from "../lib/ast";
import outdent from "outdent";
import { COMMUNITY_PACKAGE_JSON } from "../lib/constants";
import { ruleTester } from "../lib/ast/utils/ruleTester";

ruleTester().run(getRuleName(module), rule, {
	valid: [
		{
			code: outdent`
			const packageJson = {
				"name": "flowease-nodes-service",
				"version": "0.1.1",
				"description": "Consumes Service API",
				"license": "MIT",
				"author": {
						"name": "John Smith",
						"email": "john.smith@mail.com"
				},
				"repository": {
						"type": "git",
						"url": "git+https://github.com/khulnasoft-lab/flowease-nodes-service.git"
				},
				"keywords": [
						"${COMMUNITY_PACKAGE_JSON.OFFICIAL_TAG}"
				],
				"main": "index.js",
				"scripts": ${COMMUNITY_PACKAGE_JSON.SCRIPTS},
				"files": [
						"dist"
				],
				"flowease": {
						"credentials": [
								"dist/credentials/ServiceApi.credentials.js"
						],
						"nodes": [
								"dist/nodes/Service/Service.node.js"
						]
				},
				"devDependencies": ${COMMUNITY_PACKAGE_JSON.DEV_DEPENDENCIES},
				"dependencies": {
						"flowease-core": "~0.101.0"
				}
			}`,
		},
	],
	invalid: [
		{
			code: outdent`
			const packageJson = {
				"name": "flowease-nodes-service",
				"_version": "0.1.1",
				"description": "Consumes Service API",
				"license": "MIT",
				"author": {
						"name": "John Smith",
						"email": "john.smith@mail.com"
				},
				"repository": {
						"type": "git",
						"url": "git+https://github.com/khulnasoft-lab/flowease-nodes-service.git"
				},
				"keywords": [
						"${COMMUNITY_PACKAGE_JSON.OFFICIAL_TAG}"
				],
				"main": "index.js",
				"scripts": ${COMMUNITY_PACKAGE_JSON.SCRIPTS},
				"files": [
						"dist"
				],
				"flowease": {
						"credentials": [
								"dist/credentials/ServiceApi.credentials.js"
						],
						"nodes": [
								"dist/nodes/Service/Service.node.js"
						]
				},
				"devDependencies": ${COMMUNITY_PACKAGE_JSON.DEV_DEPENDENCIES},
				"dependencies": {
						"flowease-core": "~0.101.0"
				}
			}`,
			errors: [{ messageId: "addVersion" }],
		},
	],
});
