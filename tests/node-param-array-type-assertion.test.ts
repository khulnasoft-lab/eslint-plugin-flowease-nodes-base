import rule from "../lib/rules/node-param-array-type-assertion";
import { getRuleName } from "../lib/ast";
import outdent from "outdent";
import { ruleTester } from "../lib/ast/utils/ruleTester";

ruleTester().run(getRuleName(module), rule, {
	valid: [
		{
			code: outdent`
			const test: INodeProperties[] = [
				{
					displayName: 'Test',
					name: 'test',
					type: 'string',
					default: '',
				},
			];`,
		},
	],
	invalid: [
		{
			code: outdent`
			const test = [
				{
					displayName: 'Test',
					name: 'test',
					type: 'string',
					default: '',
				},
			] as INodeProperties[];`,
			errors: [{ messageId: "typeArray" }],
			output: outdent`
			const test: INodeProperties[] = [
				{
					displayName: 'Test',
					name: 'test',
					type: 'string',
					default: '',
				},
			];`,
		},
	],
});
