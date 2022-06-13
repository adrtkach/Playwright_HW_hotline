import { Locator, Page, expect } from '@playwright/test';
import { VerifyDetailsStep } from '../pages/orderSteps/verifyDetailsStep'
import { TestData, Insurer, RealEstate } from '../testData';

const testData = new TestData();
const insurer = new Insurer();
const realEstate = new RealEstate();

export class VerifyDetailsAssert extends VerifyDetailsStep {

    async verifyData() {
        await expect.soft(this.fullName, 'incorrect full name').toHaveText(`${insurer.lastName} ${insurer.firstName} ${insurer.fathersName}`);
        await expect.soft(this.birthDate, 'incorrect birth date').toHaveText(insurer.birthDate);
        await expect.soft(this.phone, 'incorrect phone').toHaveText(`+380${insurer.phoneNumber}`);
        await expect.soft(this.email, 'incorrect email').toHaveText(insurer.email);
        await expect.soft(this.passportNumber, 'incorrect passport number').toHaveText(insurer.passportNumber);
        await expect.soft(this.passportDateFrom, 'incorrect passport date from').toHaveText(insurer.passportDateFrom);
        

    }
    
}