import { Given, When, Then } from '@cucumber/cucumber';
import HomeScreen from '../../screens/Home.screen';

Given(/^launch the app$/, async() => {
  await driver.launchApp();
});

When(/^i am in the home screen$/, async() => {
  await HomeScreen.waitForIsShown();
});

Then(/^i should see a the text (.*)$/, async text => {
  const textElement = await HomeScreen.getElementByText(text);
  expect(await textElement.isDisplayed()).toBe(true);
});

Then(/^i close the app/, async() => {
  await driver.closeApp();
});
