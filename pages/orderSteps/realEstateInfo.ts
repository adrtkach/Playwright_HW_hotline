import { Locator, Page } from '@playwright/test';
import { RealEstate } from '../../testData';

const realEstate = new RealEstate();

export class RealEstateInfo {
    readonly page: Page;
    readonly cityField: Locator;
    readonly cityInput: Locator;
    readonly selectCity: Locator;
    readonly streetField: Locator;
    readonly houseField: Locator;
    readonly flatField: Locator;
    readonly sameAddressCheckbox: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cityField = page.locator('input[aria-activedescendant="react-select-6--value"]')
        this.cityInput = page.locator('div.Select-placeholder').first();
        this.streetField = page.locator('[name="address[address]"]');
        this.houseField = page.locator('[name="address[build]"]');
        this.flatField = page.locator('[name="address[flat]"]');
        this.sameAddressCheckbox = page.locator('div.ui-checkbox');
        this.continueButton = page.locator('button.ui-button--border-bottom');
    }

    async fillAddress() {
        await this.cityInput.click();
        await this.cityInput.type(realEstate.city);
        await this.page.keyboard.press('Enter');
        await this.streetField.fill(realEstate.street);
        await this.houseField.fill(realEstate.house);
        await this.flatField.fill(realEstate.flat);
        await this.sameAddressCheckbox.check();
    }

    async clickSubmit() {
        await this.continueButton.click();
    }

}

