import rule from "../lib/rules/node-param-description-missing-from-limit";
import { getRuleName } from "../lib/ast";
import outdent from "outdent";
import { ruleTester } from "../lib/ast/utils/ruleTester";

ruleTester().run(getRuleName(module), rule, {
	valid: [
		{
			code: outdent`
			const test = {
				displayName: 'Limit',
				name: 'limit',
				default: 50,
				typeOptions: {
					minValue: 1,
				},
				type: 'number',
				description: 'Max number of results to return',
			};`,
		},
	],
	invalid: [
		{
			code: outdent`
			const test = {
				displayName: 'Limit',
				name: 'limit',
				default: 50,
				typeOptions: {
					minValue: 1,
				},
				type: 'number',
			};`,
			errors: [{ messageId: "addDescription" }],
			output: outdent`
			const test = {
				displayName: 'Limit',
				name: 'limit',
				default: 50,
				typeOptions: {
					minValue: 1,
				},
				type: 'number',
				description: 'Max number of results to return',
			};`,
		},
	],
});
