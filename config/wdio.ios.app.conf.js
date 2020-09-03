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
    'appium:platformVersion': '13.4',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'XCUITest',
    'appium:app': '/Users/gabrielbori/Documents/Automation/woloxBootstrap/appium-bootstrap/config/app/iOS-Simulator-NativeDemoApp-0.2.1.app',
    'appium:newCommandTimeout': 2400,
    'appium:noReset': false,
    'appium:fullReset': false,
  }

];

exports.config = config;
