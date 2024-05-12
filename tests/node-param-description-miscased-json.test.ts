import rule from "../lib/rules/node-param-description-miscased-json";
import { getRuleName } from "../lib/ast";
import outdent from "outdent";
import { ruleTester } from "../lib/ast/utils/ruleTester";

ruleTester().run(getRuleName(module), rule, {
	valid: [
		{
			code: outdent`
			const test = {
				displayName: 'JSON',
				name: 'json',
				type: 'string',
				default: '',
				description: 'The JSON to send',
			};`,
		},
		{
			code: outdent`
			const test = {
				name: 'JSON',
				value: 'json',
				description: 'The JSON',
			};`,
		},
	],
	invalid: [
		{
			code: outdent`
			const test = {
				displayName: 'JSON',
				name: 'json',
				type: 'string',
				default: '',
				description: 'The json to send',
			};`,
			errors: [{ messageId: "uppercaseJson" }],
			output: outdent`
			const test = {
				displayName: 'JSON',
				name: 'json',
				type: 'string',
				default: '',
				description: 'The JSON to send',
			};`,
		},
		{
			code: outdent`
			const test = {
				displayName: 'JSON',
				name: 'json',
				type: 'string',
				default: '',
				description: 'The Json to send',
			};`,
			errors: [{ messageId: "uppercaseJson" }],
			output: outdent`
			const test = {
				displayName: 'JSON',
				name: 'json',
				type: 'string',
				default: '',
				description: 'The JSON to send',
			};`,
		},
		{
			code: outdent`
			const test = {
				name: 'JSON',
				value: 'json',
				description: 'The json to send',
			};`,
			errors: [{ messageId: "uppercaseJson" }],
			output: outdent`
			const test = {
				name: 'JSON',
				value: 'json',
				description: 'The JSON to send',
			};`,
		},
		{
			code: outdent`
			const test = {
				name: 'JSON',
				value: 'json',
				description: 'The json to send. The json to send.',
			};`,
			errors: [{ messageId: "uppercaseJson" }],
			output: outdent`
			const test = {
				name: 'JSON',
				value: 'json',
				description: 'The JSON to send. The JSON to send.',
			};`,
		},
		{
			code: outdent`
			const test = {
				name: 'JSON',
				value: 'json',
				description: 'The Json to send',
			};`,
			errors: [{ messageId: "uppercaseJson" }],
			output: outdent`
			const test = {
				name: 'JSON',
				value: 'json',
				description: 'The JSON to send',
			};`,
		},
	],
});
