import { Locator, Page } from '@playwright/test';

export class AboutStep {
    readonly page: Page;
    readonly proceedButton: Locator;
    readonly pageTitle: Locator;
    readonly price: Locator;
    readonly term: Locator;

    constructor(page:Page) {
        this.page = page;
        this.proceedButton = page.locator('.step-buy-base__section button span:has-text("ОФОРМИТИ СТРАХОВКУ")')
        this.pageTitle = page.locator('h1.checkout-wrapper__title');
        this.price = page.locator("//section[@class='step-buy-base__section']//span[contains(normalize-space(), 'Ціна')]")
        this.term = page.locator('.col-lg-6 span.step-buy-base__price').nth(1);
    }

    async clickProceed() {
        await this.proceedButton.click();
    }

    async getServicePrice() {
        await this.price.click();
        const value = (await this.price.innerHTML()).toString().replace(/\D/g, "");
        return value;
    }

    async getServiceTerm() {
        const value = (await this.price.innerHTML()).toString();
        return value;
    }

}