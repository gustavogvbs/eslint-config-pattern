module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "import-helpers"],
	rules: {
		"no-console": ["error", { allow: ["warn", "error"] }],
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

		"prettier/prettier": [
			"error",
			{
				printWidth: 100,
				tabWidth: 2,
				singleQuote: false,
				trailingComma: "all",
				arrowParens: "always",
				semi: true,
			},
		],
	},
	settings: {
		"import/parsers": {
			[require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
		},
	},
	ignorePatterns: ["node_modules"],
};
