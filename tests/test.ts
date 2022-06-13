import { test, expect } from '@playwright/test';
import { TestData } from '../testData';
import { HomePage } from '../pages/homePage'
import { AboutStep } from '../pages/orderSteps/aboutStep'
import { TermsStep } from '../pages/orderSteps/termsStep'
import { InsurerDetails } from '../pages/orderSteps/insurerDetailsStep';
import { RealEstateInfo } from '../pages/orderSteps/realEstateInfo';
import { VerifyDetailsStep } from '../pages/orderSteps/verifyDetailsStep';
import { VerifyDetailsAssert } from '../assertions/VerifyDetailsAssert';

const termDate = '01.08.2022'

test('test: house insurance purchase', async ({ page }) => {

    const homePage = new HomePage(page);
    const aboutStep = new AboutStep(page);
    const termsStep = new TermsStep(page);
    const testData = new TestData();
    const insurerDetails = new InsurerDetails(page);
    const realEstateInfo = new RealEstateInfo(page);
    const verifyDetailsStep = new VerifyDetailsStep(page);
    const verifyDetailsAssert = new VerifyDetailsAssert(page);


    // Go to Insurance Order

    await homePage.goToMainUrl();
    await homePage.goToInsurance();

    // Step 1 - About

    testData.servicePrice = await aboutStep.getServicePrice();
    testData.serviceTerm = await aboutStep.getServiceTerm();
    await aboutStep.clickProceed();

    // Step 2 - Terms

    await termsStep.fillDate(termDate);
    await termsStep.clickProceedButton();

    // Step 3 - Insurer Details

    await insurerDetails.fillInsurerDetails();
    await insurerDetails.clickSubmit();

    // Step 4 - Real Estate Info

    await realEstateInfo.fillAddress();
    await realEstateInfo.clickSubmit();

    // Step 5 - Verify Details

    await verifyDetailsAssert.verifyData();
    await verifyDetailsStep.typePassword();
    await verifyDetailsStep.clickSubmit();

});