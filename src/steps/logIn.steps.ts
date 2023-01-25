import { Given, When, Then } from "@cucumber/cucumber";
import { expect, Locator } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
//import { page } from '../steps/world';
//import { POManager } from '../pageobjectsTS/POManager';

// import * as core from '@actions/core';



//--- Arrange ---//
// chrome - plugin / cookies
// const givenEmail: string = 'hallodu@gmail.com';
// const password: string = 'Aa12345!';

Given('I navigate to {string}', async function (this: ICustomWorld, expectedText: string) {

    const page = this.page!;
    await page.goto(config.BASE_URL_2);
    // await page.locator('nav >> a >> text="Playwright"').waitFor();

    await page.locator(`.title em`).waitFor();        // Rahul Shetty Academy

    const actualTextOnLoginPage = await page.locator(`.title em`);
    const actualText = await actualTextOnLoginPage.textContent();
    console.log(actualText);
    expect(expectedText).toEqual(actualText!.trim());
    console.log("I navigate to");
});


When('I type valid {string}, {string} and click login', async function (this: ICustomWorld, givenEmail: string, password: string) {
    //--- Act ---//
    // Login //
    const page = this.page!;

    const signInBtn = page.locator("[name='login']");
    const userEmail = page.locator('#userEmail');
    const password_obj = page.locator('#userPassword');

    await userEmail.type(givenEmail);
    await password_obj.fill(password);
    await signInBtn.click();

    // wait until page is fully loaded
    await page.waitForLoadState('networkidle');
    console.log('I type valid {string}, {string} and click login');

});


Then('I should enter my account-page {string}', async function (this: ICustomWorld, expectedPageTitle: string) {

    const page = this.page!;

    const subTitle: Locator = page.locator('.left');
    const textOfSubTitle = await subTitle.textContent();
    console.log(textOfSubTitle);

    expect(expectedPageTitle).toEqual(textOfSubTitle!.trim());
    console.log('I should enter my account-page {string}');

});