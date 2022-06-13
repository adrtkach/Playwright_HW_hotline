import { Locator, Page } from '@playwright/test';

export class TermsStep {
    readonly page: Page;
    readonly dateField: Locator;
    readonly proceedButton: Locator;

    constructor(page:Page) {
        this.page = page;
        this.dateField = page.locator('.SingleDatePickerInput .DateInput_input')
        this.proceedButton = page.locator('button span:has-text("ПРОДОВЖИТИ")')
    }

    async fillDate(date) {
        await this.dateField.dblclick();
        await this.dateField.fill('');
        await this.dateField.type(date)
        await this.page.keyboard.press('Enter');
    }

    async clickProceedButton() {
        await this.proceedButton.click();
    }
}