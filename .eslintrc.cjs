module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: 'standard',
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'spaced-comment': 'off',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		indent: ['error', 'tab'],
		semi: ['error', 'always'],
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'no-alert': 'warn'
	}
};
