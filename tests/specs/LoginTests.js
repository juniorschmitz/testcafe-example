import { ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage.ts';

const testData = require('../data/data.json');

const URL = 'https://parabank.parasoft.com/parabank/index.htm';
const getURL = ClientFunction(() => window.location.href);

fixture`Login Fixture`
    .page(URL);
 
test('Home page should load', async t => {
    await t
      .expect(getURL()).eql(URL)
      .expect(homepage.loginHeader.exists).ok()
});

testData.forEach(data => {
 test('User Login Test',async t => {
    await t
        await homepage.login(data.user, data.password)
        await t
        .expect(homepage.loggedInUserName.exists).ok(); 
    });
});