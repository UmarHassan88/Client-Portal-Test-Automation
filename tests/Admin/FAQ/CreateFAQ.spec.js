import {test} from '@playwright/test';
import { FAQ } from '../../../pages/FAQ';

test('This test creates and verifies an FAQ', async({page}) =>{ 
    const faqInstance = new FAQ(page);
    await faqInstance.createFAQ();
})