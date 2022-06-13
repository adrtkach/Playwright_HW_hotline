import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly insuranceButton: Locator;
    readonly orderInsuranceButton: Locator;
    readonly price: Locator;
    readonly header: Locator;
    

    constructor(page: Page) {
            this.page = page;
            this.insuranceButton = page.locator('.main-page-products-list p:has-text("Страховка житла")')
            this.orderInsuranceButton = page.locator('.gummy-container--un-stuck .property_index-filter__container button span:has-text("ОФОРМИТИ ПОЛІС")')
            this.price = page.locator('p.property_index_filter__price');
            this.header = page.locator('div#header-div')
            
    }

    async goToMainUrl() {
        await this.page.goto('https://hotline.finance/ua/');
    }

    async goToInsurance() {
        await this.insuranceButton.click()
        await this.price.click();
        await this.orderInsuranceButton.click()
    }
}