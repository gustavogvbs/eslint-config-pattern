const eslintRecommended = require("eslint/configs/recommended.json");
const reactRecommended = require("eslint-plugin-react/lib/configs/recommended.json");
const reactHooksRecommended = require("eslint-plugin-react-hooks/lib/configs/recommended.json");
const typescriptRecommended = require("@typescript-eslint/eslint-plugin/dist/configs/recommended.json");
const prettierRecommended = require("eslint-config-prettier");

const typescriptParser = require("@typescript-eslint/parser");

module.exports = [
	{
		parser: typescriptParser,
		parserOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			ecmaFeatures: {
				jsx: true,
			},
		},
		plugins: ["react", "jsx-a11y", "@typescript-eslint", "import-helpers"],
		rules: {
			...eslintRecommended.rules,
			...reactRecommended.rules,
			...reactHooksRecommended.rules,
			...typescriptRecommended.rules,
			...prettierRecommended.rules,
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
