import { Locator, Page } from '@playwright/test';
import { Insurer } from '../../testData';

const insurer = new Insurer()

export class VerifyDetailsStep {
    readonly page: Page;
    readonly fullName: Locator;
    readonly birthDate: Locator;
    readonly phone: Locator;
    readonly email: Locator;
    readonly passportNumber: Locator;
    readonly passportDateFrom: Locator;
    readonly passportIssuedBy: Locator;
    readonly address1: Locator;
    readonly address2: Locator;
    readonly insurranceStartDate: Locator;
    readonly term: Locator;
    readonly finalPrice: Locator;
    readonly submitButton: Locator;
    readonly dataLocator: string;
    readonly password: Locator;

    constructor(page: Page) {
        this.page = page;
        const dataLocator = '.col-sm-6 .parameter__value '
        this.fullName = page.locator(dataLocator).nth(0);
        this.birthDate = page.locator(dataLocator).nth(1);
        this.phone = page.locator(dataLocator).nth(2);
        this.email = page.locator(dataLocator).nth(3);
        this.passportNumber = page.locator(dataLocator).nth(4);
        this.passportDateFrom = page.locator(dataLocator).nth(5);
        this.passportIssuedBy = page.locator(dataLocator).nth(6);
        this.address1 = page.locator(dataLocator).nth(7);
        this.address2 = page.locator(dataLocator).nth(8);
        this.insurranceStartDate = page.locator(dataLocator).nth(9);
        this.term = page.locator(dataLocator).nth(10);
        this.finalPrice = page.locator('span.step-buy-base__price');
        this.password = page.locator('div input[type="password"]');
        this.submitButton = page.locator('.col-lg-12 button[type="Submit"]').nth(1);
    }

    async typePassword() {
        await this.password.fill(insurer.password);
    }

    async clickSubmit() {
        await this.submitButton.click();
    }
}