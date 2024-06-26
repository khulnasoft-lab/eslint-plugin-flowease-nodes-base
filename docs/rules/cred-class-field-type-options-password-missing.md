[//]: # "File generated from a template. Do not edit this file directly."

# cred-class-field-type-options-password-missing

In a sensitive string-type field, `typeOptions.password` must be set to `true` to obscure the input. A field name is sensitive if it contains the strings: `secret`,`password`,`token`,`key`. See exceptions in source.

📋 This rule is part of the `plugin:flowease-nodes-base/credentials` config.

🔧 Run ESLint with `--fix` option to autofix the issue flagged by this rule.

## Examples

❌ Example of **incorrect** code:

```js
export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'test';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'secret',
            type: 'string',
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'test';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'password',
            type: 'string',
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'test';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'token',
            type: 'string',
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'test';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'key',
            type: 'string',
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'test';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'appPassword',
            type: 'string',
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'test';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'clientSecret',
            type: 'string',
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'test';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'accessToken',
            type: 'string',
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'test';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'secret',
            type: 'string',
            typeOptions: { someOption: true },
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'test';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'password',
            type: 'string',
            typeOptions: { someOption: true },
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'test';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'token',
            type: 'string',
            typeOptions: { someOption: true },
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'test';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'key',
            type: 'string',
            typeOptions: { someOption: true },
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'test';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'appPassword',
            type: 'string',
            typeOptions: { someOption: true },
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'test';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'clientSecret',
            type: 'string',
            typeOptions: { someOption: true },
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'test';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'accessToken',
            type: 'string',
            typeOptions: { someOption: true },
            default: '',
            required: true,
        },
    ];
}
```

✅ Example of **correct** code:

```js
export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'zammad';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'secret',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'zammad';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'password',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'zammad';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'token',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'zammad';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'key',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'zammad';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'appPassword',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'zammad';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'clientSecret',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'zammad';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'accessToken',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'zammad';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'accessKeyId',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'zammad';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: 'passwordless',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'zammad';
    properties: INodeProperties[] = [
        {
            displayName: 'Some Display Name',
            name: '/token',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            required: true,
        },
    ];
}

export class TestApi implements ICredentialType {
    name = 'testApi';
    displayName = 'Test API';
    documentationUrl = 'zammad';
    properties: INodeProperties[] = [
        {
            displayName: 'Access Token',
            name: 'accessToken',
            type: 'hidden',
            default: '',
            required: true,
        },
    ];
}
```

## Links

- [Rule source](../../lib/rules/cred-class-field-type-options-password-missing.ts)
- [Test source](../../tests/cred-class-field-type-options-password-missing.test.ts)
