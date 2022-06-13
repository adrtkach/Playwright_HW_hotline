import { Locator, Page } from '@playwright/test';
import { Insurer } from '../../testData';

const insurer = new Insurer();

export class InsurerDetails {
    readonly title: Locator;
    readonly lastName: Locator;
    readonly firstName: Locator;
    readonly fathersName: Locator;
    readonly birthDate: Locator
    readonly passportNumber: Locator;
    readonly passportDateFrom: Locator;
    readonly passportIssuedBy: Locator;
    readonly phoneNumber: Locator;
    readonly email: Locator;
    readonly submitButton: Locator;


    constructor(page:Page) {
        // this.title = page.locator('section.step-buy-base__section h1');
        this.lastName = page.locator('[name="insurer[last_name]"]');
        this.firstName = page.locator('[name="insurer[first_name]"]');
        this.fathersName = page.locator('[name="insurer[surname]"]');
        this.birthDate = page.locator('[name="insurer[birthday]"]')
        this.passportNumber = page.locator('[name="document[series_number]"]');
        this.passportDateFrom = page.locator('[name="document[date_from]"]');
        this.passportIssuedBy = page.locator('[name="document[issue_by]"]');
        this.phoneNumber = page.locator('[name="insurer[phone]"]');
        this.email = page.locator('[name="insurer[email]"]');
        this.submitButton = page.locator('button[type="submit"]')

    }

    async fillInsurerDetails() {
        await this.lastName.fill(insurer.lastName);
        await this.firstName.fill(insurer.firstName);
        await this.fathersName.fill(insurer.fathersName);
        await this.birthDate.fill(insurer.birthDate);
        await this.passportNumber.type(insurer.passportNumber);
        await this.passportDateFrom.type(insurer.passportDateFrom);
        await this.passportIssuedBy.type(insurer.passportIssuedBy);
        await this.phoneNumber.type(insurer.phoneNumber);
        await this.email.fill(insurer.email)
    }
    async clickSubmit() {
        await this.submitButton.click()
    }
}
