module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "jsx-a11y", "@typescript-eslint", "import-helpers"],
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
		"react/self-closing-comp": "error",
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
			[require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
		},
	},
	ignorePatterns: ["node_modules"],
};
