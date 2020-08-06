"use strict";
exports.__esModule = true;

exports.config = {
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    specs: ['./features/*.feature'],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: 'http://localhost:4200/',
    suites: {
        'search-form.po': '../features/Search-person.feature'
    },
    onPrepare: function () {
        var chai = require('chai');
        var chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        chai.should();
    },
    cucumberOpts: {
        compiler: 'ts:ts-node/register',
        strict: true,
        //format: ['../node_modules/cucumber-pretty'],
        format: 'json:./reports/json/cucumber_report.json',
        require: ['./steps/*.js', './hooks/*.js']
    },
    onComplete: function () {
    }
};
