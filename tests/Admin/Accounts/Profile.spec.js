import {test, expect} from '@playwright/test'
import { Accounts} from '../../../pages/Accounts';


test.describe('Test Automation for: Accounts -> Profile page', () => {
    let adminInstance;

    test.beforeEach(async({page}) => {
        adminInstance = new Accounts(page);
        await adminInstance.navigateToAccounts();
    });

    test('This test automates the Accounts -> Profile page -> User Info', async() => {
        await adminInstance.profileeditUserInfo();
    });

    test('This test automates the Accounts -> Profile page -> User Profile', async() => {
        await adminInstance.edituserProfile();
    });

    test('This test automates the Accounts -> Profile page -> Password', async() => {
        await adminInstance.editPassword();
    });
});
