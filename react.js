const reactPlugin = require("eslint-plugin-react");
const hooksPlugin = require("eslint-plugin-react-hooks");
const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const jsxA11yPlugin = require("eslint-plugin-jsx-a11y");
const prettierPlugin = require("eslint-plugin-prettier");

module.exports = [
	{
		files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
		ignores: ["node_modules/**"],
	},

	// ESLint Config Base
	{
		languageOptions: {
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: {
			eqeqeq: "error",
			"no-unused-vars": "error",
			"no-unreachable": "error",
			"prefer-const": "error",
			"no-console": ["error", { allow: ["warn", "error"] }],
		},
	},

	// Prettier Config
	{
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
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
		},
	},

	// React Plugin
	{
		plugins: {
			react: reactPlugin,
		},
		rules: {
			...reactPlugin.configs.recommended.rules,
			"react/jsx-sort-props": [
				"error",
				{ callbacksLast: true, shorthandFirst: true },
			],
			"react/self-closing-comp": "error",
			"react/jsx-key": "error",
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
			"react/no-unknown-property": "error",
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},

	// React Hooks Plugin
	{
		plugins: {
			"react-hooks": hooksPlugin,
		},
		rules: {
			...hooksPlugin.configs.recommended.rules,
		},
	},

	// TypeScript Plugin
	{
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			"@typescript-eslint": typescriptPlugin,
		},
		rules: {
			"@typescript-eslint/no-explicit-any": "error",
			"@typescript-eslint/explicit-function-return-type": "warn",
		},
	},

	// JSX A11y Plugin
	{
		plugins: {
			"jsx-a11y": jsxA11yPlugin,
		},
		rules: {
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
		},
	},
];
