import { ESLintUtils } from "@typescript-eslint/utils";

export const createRule = ESLintUtils.RuleCreator((ruleName) => {
	return `https://github.com/khulnasoft-lab/eslint-plugin-flowease-nodes-base/blob/master/docs/rules/${ruleName}.md`;
});

export const getRuleName = ({ filename }: { filename: string }) =>
	filename
		.split("/")
		.pop()
		?.replace(/(\.test)?\.(j|t)s/, "") ?? "Unknown";
