import { id } from "../ast/identifiers";
import { getters } from "../ast/getters";
import { utils } from "../ast/utils";
import { AST_NODE_TYPES, TSESTree } from "@typescript-eslint/utils";

export default utils.createRule({
	name: utils.getRuleName(module),
	meta: {
		type: "problem",
		docs: {
			description:
				"The `flowease.floweaseNodesApiVersion` value in the `package.json` of a community package must be a number.",
			recommended: "strict",
		},
		schema: [],
		messages: {
			changeToNumber:
				"Change the `flowease.floweaseNodesApiVersion` value to number in package.json",
		},
	},
	defaultOptions: [],
	create(context) {
		return {
			ObjectExpression(node) {
				if (!id.isCommunityPackageJson(context.getFilename(), node)) return;

				const flowease = getters.communityPackageJson.getFlowease(node);

				if (!flowease) return;

				const apiVersion = getFloweaseNodesApiVersion(flowease);

				if (!apiVersion) return;

				if (!hasNumberValue(apiVersion)) {
					context.report({
						messageId: "changeToNumber",
						node,
					});
				}
			},
		};
	},
});

function getFloweaseNodesApiVersion(flowease: {
	ast: TSESTree.ObjectLiteralElement;
}) {
	if (
		flowease.ast.type === AST_NODE_TYPES.Property &&
		flowease.ast.value.type === AST_NODE_TYPES.ObjectExpression
	) {
		return flowease.ast.value.properties.find(id.hasNodesApiVersion) ?? null;
	}

	return null;
}

function hasNumberValue(
	floweaseNodesApiVersion: TSESTree.ObjectLiteralElement
) {
	return (
		floweaseNodesApiVersion.type === AST_NODE_TYPES.Property &&
		floweaseNodesApiVersion.value.type === AST_NODE_TYPES.Literal &&
		typeof floweaseNodesApiVersion.value.value === "number"
	);
}
