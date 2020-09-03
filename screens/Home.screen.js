import AppScreen from './app.screen';
const SELECTORS = {
  HOME_SCREEN: driver.isAndroid
    ? '-android uiautomator: new UiSelector().description("Home-screen")'
    : '~Home-screen',
  TEXT: driver.isAndroid
    ? '-android uiautomator: new UiSelector().text("{TEXT}")'
    : '//XCUIElementTypeStaticText[@name="{TEXT}"]'
};

class HomeScreen extends AppScreen {
  constructor() {
    super(SELECTORS.HOME_SCREEN);
  }

  getElementByText(searchedText) {
    return $(SELECTORS.TEXT.replace(/{TEXT}/, searchedText));
  }
}
export default new HomeScreen();
