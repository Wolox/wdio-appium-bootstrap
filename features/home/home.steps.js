import { Given, When, Then } from 'cucumber';
import HomeScreen from '../../screens/Home.screen';

Given(/^launch the app$/, () => {
  driver.launchApp();
});

When(/^i am in the home screen$/, () => {
  HomeScreen.waitForIsShown();
});

Then(/^i should see a the text (.*)$/, text => {
  const textElement = HomeScreen.getElementByText(text);
  expect(textElement.isDisplayed()).toBe(true);
});

Then(/^i close the app/, () => {
  driver.closeApp();
});
