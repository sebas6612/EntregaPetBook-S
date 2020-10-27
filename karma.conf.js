// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config) {
    config.set({
        basePath: '',
        browsers: ['Chrome'],
        customLaunchers: {
          ChromeHeadlessCI: {
            base: 'ChromeHeadless',
            flags: ['--no-sandbox']
          }
        },
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma'),
            require('karma-junit-reporter'),
            require('karma-sonarqube-unit-reporter')
        ],
        sonarQubeUnitReporter: {
          sonarQubeVersion: 'LATEST',
          outputFile: 'reports/ut_report.xml',
          overrideTestDescription: true,
          testPaths: ['./src'],
          testFilePattern: '.spec.ts',
          useBrowserName: false
        },
        reporters: ['sonarqubeUnit'],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, './coverage'),
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true
        },
        reporters: ['junit', 'progress', 'kjhtml'],
        junitReporter: {},
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,
        restartOnFileChange: true
    });
};
