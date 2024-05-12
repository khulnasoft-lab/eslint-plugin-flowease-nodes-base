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
				"The `flowease.nodes` key must be present in the `package.json` of a community package.",
			recommended: "strict",
		},
		schema: [],
		messages: {
			addFloweaseNodes: "Add an `flowease.nodes` key to package.json",
		},
	},
	defaultOptions: [],
	create(context) {
		return {
			ObjectExpression(node) {
				if (!id.isCommunityPackageJson(context.getFilename(), node)) return;

				const flowease = getters.communityPackageJson.getFlowease(node);

				if (!flowease) return;

				if (!hasFloweaseNodes(flowease)) {
					context.report({
						messageId: "addFloweaseNodes",
						node,
					});
				}
			},
		};
	},
});

function hasFloweaseNodes(flowease: { ast: TSESTree.ObjectLiteralElement }) {
	if (
		flowease.ast.type === AST_NODE_TYPES.Property &&
		flowease.ast.value.type === AST_NODE_TYPES.ObjectExpression
	) {
		return flowease.ast.value.properties.some(id.hasNodesLiteral);
	}

	return false;
}
