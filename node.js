const eslintRecommended = require("eslint");
const typescriptRecommended = require("@typescript-eslint/eslint-plugin");
const prettierConfig = require("eslint-config-prettier");
const typescriptParser = require("@typescript-eslint/parser");

module.exports = [
	{
		parser: typescriptParser,
		parserOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
		},
		plugins: ["@typescript-eslint", "import-helpers"],
		rules: {
			...eslintRecommended.rules,
			...typescriptRecommended.rules,
			...prettierConfig.rules,
			eqeqeq: "error",
			"no-unused-vars": "error",
			"no-unreachable": "error",
			"prefer-const": "error",
			"no-console": ["error", { allow: ["warn", "error"] }],
			"@typescript-eslint/explicit-function-return-type": "error",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_" },
			],
		},
		settings: {
			"import/parsers": {
				[require.resolve("@typescript-eslint/parser")]: [
					".ts",
					".tsx",
					".d.ts",
				],
			},
		},
		ignorePatterns: ["node_modules"],
	},
];
