import { test, expect } from '@playwright/test';
import { Country } from '../../../pages/Country';

test("This test creates and manages a new country", async({page}) => {
    const countryInstance = new Country(page);
    await countryInstance.mandatoryFields();
    await countryInstance.addCountry();
    await countryInstance.verifyAddedcountry();
});