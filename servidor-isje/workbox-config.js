module.exports = {
	globDirectory: '../app',
	globPatterns: [
		'**/*.{js,json,html,svg,css}'
	],
	swDest: '../app/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};