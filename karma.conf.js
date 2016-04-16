'use strict';

// Karma configuration
module.exports = function (config) {
	config.set({
		// Frameworks to use
		frameworks: ['jasmine'],

		// List of files / patterns to load in the browser
		files: [
			'src/lib/jquery/dist/jquery.js',
			'src/lib/es5-shim/es5-shim.js',
			'src/lib/json3/lib/json3.min.js',
			'src/lib/bootstrap/dist/js/bootstrap.js',
			'src/lib/angular/angular.js',
			'src/lib/angular-aria/angular-aria.js',
			'src/lib/angular-resource/angular-resource.js',
			'src/lib/angular-mocks/angular-mocks.js',
			'src/lib/angular-cookies/angular-cookies.js',
			'src/lib/angular-sanitize/angular-sanitize.js',
			'src/lib/angular-animate/angular-animate.js',
			'src/lib/angular-touch/angular-touch.js',
			'src/lib/angular-ui-router/release/angular-ui-router.js',
			'src/lib/angular-bootstrap/ui-bootstrap-tpls.js',
			'src/lib/angular-aria/angular-aria.js',
			'src/lib/angular-material/angular-material.js',
			'src/lib/angular-messages/angular-messages.js',
			'src/lib/angular-material-icons/angular-material-icons.js',
			'app/app.js',
			'app/modules/home/homeModule.js',
			'app/modules/home/homeCtrl.js',
			'app/modules/home/homeRoute.js',
			'app/modules/home/homeService.js',
			'app/modules/home/home-test.js'
		],

		// Test results reporter to use
		// Possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		//reporters: ['progress'],
		reporters: ['spec'],

		// Web server port
		port: 9876,

		// Enable / disable colors in the output (reporters and logs)
		colors: true,

		// Level of logging
		// Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// Enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['PhantomJS'],

		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,

		// Continuous Integration mode
		// If true, it capture browsers, run tests and exit
		singleRun: true
	});
};
