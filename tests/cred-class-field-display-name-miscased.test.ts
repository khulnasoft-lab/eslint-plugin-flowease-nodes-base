import rule from "../lib/rules/cred-class-field-display-name-miscased";
import { getRuleName } from "../lib/ast";
import outdent from "outdent";
import { ruleTester } from "../lib/ast/utils/ruleTester";

ruleTester().run(getRuleName(module), rule, {
	valid: [
		{
			code: outdent`
			class MyTestApi implements ICredentialType {
				name = 'myTestApi';
				displayName = 'My Test API';
				documentationUrl = 'myTest';
			}`,
		},
		{
			code: outdent`
			class MyTestApi implements ICredentialType {
				name = 'myTestApi';
				displayName = 'flowease API';
				documentationUrl = 'myTest';
			}`,
		},
	],
	invalid: [
		{
			code: outdent`
			class TestApi implements ICredentialType {
				name = 'myTestApi';
				displayName = 'My test API';
				documentationUrl = 'myTest';
			}`,
			errors: [{ messageId: "useTitleCase" }],
			output: outdent`
			class TestApi implements ICredentialType {
				name = 'myTestApi';
				displayName = 'My Test API';
				documentationUrl = 'myTest';
			}`,
		},
	],
});
