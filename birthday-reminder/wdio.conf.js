exports.config = {
	runner: 'local',
	specs: ['./test/specs/**/*.js'],
	// Patterns to exclude.
	exclude: [
		// 'path/to/excluded/files'
	],
	maxInstances: 1,
	capabilities: [
		{
			browserName: 'chrome',
		},
	],
	//
	// ===================
	// Test Configurations
	// ===================
	services: ['chromedriver'],
	chromeDriverArgs: ['--verbose'],
	// Level of logging verbosity: trace | debug | info | warn | error | silent
	logLevel: 'info',
	bail: 0,
	baseUrl: 'http://localhost:3000',
	waitforTimeout: 10000,
	connectionRetryTimeout: 120000,
	connectionRetryCount: 3,
	framework: 'mocha',
	reporters: ['spec'],
	mochaOpts: {
		ui: 'bdd',
		timeout: 60000,
	},
};
