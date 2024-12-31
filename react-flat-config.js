const globals = require("globals");
const pluginJs = require("@eslint/js");
const tseslint = require("typescript-eslint");
const importPlugin = require("eslint-plugin-import");
const tsParser = require("@typescript-eslint/parser");
const reactHooksPlugin = require("eslint-plugin-react-hooks");
const prettierPlugin = require("eslint-plugin-prettier");
const { fixupPluginRules } = require("@eslint/compat");
const reactPlugin = require("eslint-plugin-react");
const jsxA11y = require("eslint-plugin-jsx-a11y");

const languageOptions = {
	globals: {
		...globals.node,
		...globals.jest,
		...globals.serviceworker,
		...globals.browser,
	},
	ecmaVersion: "latest",
	sourceType: "module",
	parser: tsParser,
};

const pluginsOptions = {
	import: importPlugin,
	"import/parsers": tsParser,
	"react-hooks": fixupPluginRules(reactHooksPlugin),
	prettier: prettierPlugin,
	jsxA11y: jsxA11y,
	react: reactPlugin,
};

module.exports = [
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx,json,mjs}"] },
	{ ignores: ["**/node_modules", "**/dist", "**/eslint.config.*"] },
	{
		plugins: {
			...pluginsOptions,
		},
	},
	{
		languageOptions: {
			...languageOptions,
		},
	},
	pluginJs.configs.recommended,
	jsxA11y.flatConfigs.recommended,
	...tseslint.configs.recommended,
	{
		rules: {
			...reactHooksPlugin.configs.recommended.rules,
			eqeqeq: "error",
			"no-unused-vars": "error",
			"no-unreachable": "error",
			"prefer-const": "error",
			"no-console": ["error", { allow: ["warn", "error"] }],

			"@typescript-eslint/no-explicit-any": "error",
			"@typescript-eslint/explicit-function-return-type": "warn",

			"react/jsx-sort-props": [
				"error",
				{ callbacksLast: true, shorthandFirst: true },
			],

			"react/self-closing-comp": "error",
			"react/jsx-key": "error",
			"react/self-closing-comp": "error",
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
			"react/no-unknown-property": "error",

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
			"prettier/prettier": [
				"error",
				{
					printWidth: 80,
					tabWidth: 2,
					useTabs: false,
					semi: true,
					singleQuote: false,
					arrowParens: "avoid",
					trailingComma: "all",
					jsxBracketSameLine: false,
					bracketSpacing: true,
				},
				{
					usePrettierrc: false,
				},
			],
		},
	},
];
