const eslintRecommended = require("eslint");
const eslintPlugin = require("@typescript-eslint/eslint-plugin");
const reactPlugin = require("eslint-plugin-react");
const hooksPlugin = require("eslint-plugin-react-hooks");
const prettierPlugin = require("eslint-config-prettier");
const eslint = require("@eslint/js");

const typescriptParser = require("@typescript-eslint/parser");

module.exports = [
	eslintRecommended,
	eslint.configs.recommended,
	prettierPlugin,
	{
		plugins: {
			react: reactPlugin,
		},
		rules: {
			...reactPlugin.configs["jsx-runtime"].rules,
		},
		settings: {
			react: {
				version: "detect", // You can add this if you get a warning about the React version when you lint
			},
		},
	},
	{
		plugins: {
			"react-hooks": hooksPlugin,
		},
		rules: hooksPlugin.configs.recommended.rules,
	},
	{
		plugins: {
			react: reactPlugin,
		},
		rules: {
			...reactPlugin.configs["jsx-runtime"].rules,
		},
		settings: {
			react: {
				version: "detect", // You can add this if you get a warning about the React version when you lint
			},
		},
	},
	{
		parser: typescriptParser,
		parserOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			ecmaFeatures: {
				jsx: true,
			},
		},
		plugins: [
			"react",
			"jsx-a11y",
			"@typescript-eslint",
			"import-helpers",
			{ eslintPlugin },
		],
		rules: {
			"no-undef": "error",
			eqeqeq: "error",
			"no-unused-vars": "error",
			"no-unreachable": "error",
			"prefer-const": "error",
			"no-console": ["error", { allow: ["warn", "error"] }],
			"react/jsx-sort-props": [
				"error",
				{ callbacksLast: true, shorthandFirst: true },
			],
			"react/self-closing-comp": "error",
			"@typescript-eslint/no-explicit-any": "error",
			"@typescript-eslint/explicit-function-return-type": "warn",
			"react/jsx-key": "error",
			"prettier/prettier": [
				"error",
				{
					printWidth: 100,
					tabWidth: 2,
					semi: false,
					singleQuote: false,
					arrowParens: "avoid",
					trailingComma: "all",
				},
			],
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
			"jsx-a11y/alt-text": [
				"warn",
				{
					elements: ["img"],
					img: ["Image"],
				},
			],
			"jsx-a11y/aria-props": "warn",
			"jsx-a11y/aria-proptypes": "warn",
			"jsx-a11y/aria-unsupported-elements": "warn",
			"jsx-a11y/role-has-required-aria-props": "warn",
			"jsx-a11y/role-supports-aria-props": "warn",
			"react/no-unknown-property": "error",
		},
		settings: {
			react: {
				version: "detect",
			},
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
