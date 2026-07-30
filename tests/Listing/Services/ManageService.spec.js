import { test, expect } from '@playwright/test';
import { Services } from '../../../pages/Services';

test('Manage Service', async({page}) => {
    const servicesInstance = new Services(page);
    await servicesInstance.createService();
    await servicesInstance.verifyService();
})