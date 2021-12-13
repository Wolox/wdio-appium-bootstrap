import AppScreen from './App.screen';

/*
  SELECTORS: This object is present in every class screen. Each value represents an object or action
  to be executed in the device. There should be one getter for each key, except it is only used inside
  the class. Each tech has it`s selector methods.
  Most common are:
  Android: xPath, accessibility, uiautomator.
  iOS: xPath, accessibility, predicate string.
*/
const SELECTORS = {
  HOME_SCREEN: driver.isAndroid
    ? '-android uiautomator: new UiSelector().description("Home-screen")'
    // accessibility:
    : '~Home-screen',
  TEXT: driver.isAndroid
    ? '-android uiautomator: new UiSelector().text("{TEXT}")'
    // xPath
    : '//XCUIElementTypeStaticText[@name="{TEXT}"]'
};

class HomeScreen extends AppScreen {
  constructor() {
    super(SELECTORS.HOME_SCREEN);
  }

  /*
    This way, you can make a flexible selector that depends on a variable value and it also works for
    both techs
  */
  getElementByText(searchedText) {
    return $(SELECTORS.TEXT.replace(/{TEXT}/, searchedText));
  }
}
export default new HomeScreen();
