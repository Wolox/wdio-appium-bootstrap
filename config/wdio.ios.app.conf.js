const { config } = require('./wdio.shared.conf');
config.cucumberOpts.tagExpression = `${config.cucumberOpts.tagExpression} and not @android`;

// ============
// Capabilities
// ============
config.capabilities = [

  {
    maxInstances: 1,
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 11',
    'appium:platformVersion': '13.7',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'XCUITest',
    'appium:app': process.env.IOS_APP,
    'appium:newCommandTimeout': 2400,
    'appium:noReset': true
  },

];

exports.config = config;
