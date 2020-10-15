exports.config = {

    runner: 'local',
    specs: [
        './specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    capabilities: [{

        maxInstances: 5,
        //
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'warn',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: [
        'spec',
        ['mochawesome',{
            outputDir: './Results'
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: function (capabilities, specs) {
        browser.maximizeWindow();
    },
    onComplete: function (exitCode, config, capabilities, results) {
        const mergeResults = require('wdio-mochawesome-reporter/mergeResults')
        mergeResults('./Results', "wdio-*")
    }

}
