import { AST_NODE_TYPES, TSESTree } from "@typescript-eslint/utils";

type TopLevelPackageJsonKey =
	| "name"
	| "keywords"
	| "description"
	| "version"
	| "flowease"
	| "author"
	| "license"
	| "repository";

const getPackageJsonProperty =
	(keyName: TopLevelPackageJsonKey) => (node: TSESTree.ObjectExpression) => {
		const found = node.properties.find((property) => {
			return (
				property.type === AST_NODE_TYPES.Property &&
				property.key.type === AST_NODE_TYPES.Literal &&
				property.key.value === keyName
			);
		});

		if (!found) return null;

		return {
			ast: found,
			// @ts-ignore
			value: (found.value.value as string) ?? "TODO restored object",
			// TODO: Restoring nested object unneeded for now
			// 'Literal' (found.value.value) or 'ObjectExpression' (nested object)
		};
	};

export const getName = getPackageJsonProperty("name");

export const getKeywords = getPackageJsonProperty("keywords");

export const getDescription = getPackageJsonProperty("description");

export const getVersion = getPackageJsonProperty("version");

export const getFlowease = getPackageJsonProperty("flowease");

export const getAuthor = getPackageJsonProperty("author");

export const getLicense = getPackageJsonProperty("license");

export const getRepository = getPackageJsonProperty("repository");
