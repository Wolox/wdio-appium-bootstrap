import { Given, When, Then } from 'cucumber';

Given(/^I am on the (\w+) page$/, page => {
  driver.pause(2000);
});

When(/^I login with (\w+) and (.+)$/, (username, password) => {
  driver.pause(2000);
});

Then(/^I should see a flash message saying (.*)$/, message => {
  driver.pause(2000);
});
