import type { ICredentialType, INodeProperties } from "flowease-workflow";

export class SampleApi implements ICredentialType {
	name = "mySample";
	displayName = "My Sample API";
	documentationUrl = "myService";
	placeholder = "https://sample.com";
	properties: INodeProperties[] = [
		{
			displayName: "API Key",
			name: "apiKey",
			type: "string",
			// typeOptions: { password: true },
			default: "",
		},
	];
}
