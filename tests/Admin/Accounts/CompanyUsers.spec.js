import {test, expect} from '@playwright/test'
import { CompanyUsers } from '../../../pages/CompanyUsers';

test.describe('Test Automation for: Accounts -> Company Users page', () => {
    let companyUsersInstance;

    test.beforeEach(async({page}) => {
        companyUsersInstance = new CompanyUsers(page);
        await companyUsersInstance.navigateToCompanyUsers();

    });

    test('This test automates the Accounts -> Company Users page', async() => {
        await companyUsersInstance.createCompanyUser();
        await companyUsersInstance.verifyUser();

    });

    /** Creates a user in the same test, then opens edit for that row (each test gets a fresh page). */
//     test('This test opens edit for the created company user', async () => {
        
//    });

});