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
				"The `flowease.nodes` value in the `package.json` of a community package must contain at least one filepath.",
			recommended: "strict",
		},
		schema: [],
		messages: {
			addOneFilepath:
				"Enter at least one filepath in `flowease.nodes` in package.json",
		},
	},
	defaultOptions: [],
	create(context) {
		return {
			ObjectExpression(node) {
				if (!id.isCommunityPackageJson(context.getFilename(), node)) return;

				const flowease = getters.communityPackageJson.getFlowease(node);

				if (!flowease) return;

				if (!hasAtLeastOneFilepath(flowease)) {
					context.report({
						messageId: "addOneFilepath",
						node,
					});
				}
			},
		};
	},
});

function hasAtLeastOneFilepath(flowease: {
	ast: TSESTree.ObjectLiteralElement;
}) {
	if (
		flowease.ast.type === AST_NODE_TYPES.Property &&
		flowease.ast.value.type === AST_NODE_TYPES.ObjectExpression
	) {
		const nodes = flowease.ast.value.properties.find(id.hasNodesLiteral);

		if (!nodes) return false;

		if (
			nodes.type === AST_NODE_TYPES.Property &&
			nodes.value.type === AST_NODE_TYPES.ArrayExpression
		) {
			return nodes.value.elements.some(
				(element) => element?.type === AST_NODE_TYPES.Literal
			);
		}
	}

	return null;
}
