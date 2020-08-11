const { config } = require('./wdio.shared.conf');
config.cucumberOpts.tagExpression = `${config.cucumberOpts.tagExpression} and not @android`;

// ============
// Capabilities
// ============
config.capabilities = [

  {
    maxInstances: 1,
    platformName: 'iOS',
    'appium:deviceName': 'iPhone Xs Max',
    'appium:platformVersion': '13.4',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'XCUITest',
    'appium:app': '',
    'appium:newCommandTimeout': 2400,
  }

];

exports.config = config;
