const { config } = require('./wdio.shared.conf');

config.cucumberOpts.tagExpression = `${config.cucumberOpts.tagExpression} and not @ios`;
// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    platformName: 'Android',
    maxInstances: 1,
    'appium:deviceName': 'Android Emulator',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'UiAutomator2',
    'appium:app': '',
    'appium:newCommandTimeout': 2400,
    'appium:chromedriverDisableBuildCheck': true
  },
];

exports.config = config;
