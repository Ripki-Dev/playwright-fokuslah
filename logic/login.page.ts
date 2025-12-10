import { expect, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    // LoginPage Locators

    constructor(page: Page) {
        this.page = page;
    }

    async loginPageLoaded() {
        await expect(this.page.getByRole('img', { name: 'Logo' })).toBeVisible();
        await expect(this.page.getByText('Nice to see you again')).toBeVisible();
        await expect(this.page.getByText('Email')).toBeVisible();
        await expect(this.page.getByRole('textbox', { name: 'Input your email' })).toBeVisible();
        await expect(this.page.getByText('Password', { exact: true })).toBeVisible();
        await expect(this.page.getByRole('textbox', { name: 'Input your password' })).toBeVisible();
        await expect(this.page.getByText('Forgot password?')).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Login' })).toBeVisible();
        await expect(this.page.getByText('Or Sign in with')).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Google Google' })).toBeVisible();
        await expect(this.page.getByText('New to Fokuslah? Start Here')).toBeVisible();
    }

    async fillEmail(email: string) {
        await this.page.getByRole('textbox', { name: 'Input your email' }).fill(email);
    }

    async fillPassword(password: string) {
        await this.page.getByRole('textbox', { name: 'Input your password' }).fill(password);
    }

    async clickOnLoginButton() {
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
}