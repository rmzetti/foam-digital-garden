module.exports = {
	globDirectory: 'webapp/',
	globPatterns: [
		'**/*.{png,css,html,js,json,md}'
	],
	swDest: 'webapp/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};