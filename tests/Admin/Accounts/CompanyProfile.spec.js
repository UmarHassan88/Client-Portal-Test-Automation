import {test, expect} from '@playwright/test';
import { CompanyProfile } from '../../../pages/CompanyProfile';
let companyProfileInstance;
test.beforeEach(async ({page}) => {
    companyProfileInstance = new CompanyProfile(page);
    await companyProfileInstance.navigateToCompanyProfile();
});

test('Test Automation for: Company Profile page', async () => {
    await companyProfileInstance.updateCompanyProfile();
});