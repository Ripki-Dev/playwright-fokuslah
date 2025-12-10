import { expect, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    // HomePage Locators

    constructor(page: Page) {
        this.page = page;
    }

    async homePageLoaded() {
        await expect(this.page.getByRole('link', { name: 'Fokuslah' })).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Malaysian Flag Bahasa Malaysia' })).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Log Masuk' })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Belajar Smart, Skor Cepat' })).toBeVisible();
        await expect(this.page.getByText('Dengan 10 soalan, AI Fokuslah')).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Saya dah ada akaun' })).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Mulakan Sekarang' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Perlukan bantuan? Hubungi' }).first()).toBeVisible();
        await expect(this.page.getByRole('img', { name: 'Hero Image' })).toBeVisible();   
    };

    async clickOnLogInButton() {
        await this.page.getByRole('button', { name: 'Saya dah ada akaun' }).click();
    }
}