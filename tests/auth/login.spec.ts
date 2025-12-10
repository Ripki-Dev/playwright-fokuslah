// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { HomePage } from '../../logic/home.page'
import { LoginPage } from '../../logic/login.page'

test.describe('Email Validation', () => {

  let homePage: HomePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    await page.goto('/');
  });

  test('Email is required', async () => {
    await homePage.homePageLoaded();
    await homePage.clickOnLogInButton();
    await loginPage.loginPageLoaded();
    await loginPage.fillEmail(' ');
    await loginPage.fillPassword('password');
    await loginPage.clickOnLoginButton();
    await expect(loginPage.page.getByText('Invalid email address')).toBeVisible();
  });
});