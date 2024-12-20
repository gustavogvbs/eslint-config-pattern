module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "import-helpers"],
	rules: {
		eqeqeq: "error",
		"no-unused-vars": "error",
		"no-unreachable": "error",
		"prefer-const": "error",
		"no-console": ["error", { allow: ["warn", "error"] }],
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
	},
	settings: {
		"import/parsers": {
			[require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
		},
	},
	ignorePatterns: ["node_modules"],
};
