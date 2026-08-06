import { test, expect } from '@playwright/test';
import { Ads } from '../../../pages/Ads';

test("This test automates and manages the Ads section", async({page}) => {
    const adsInstance = new Ads(page);
    await adsInstance.createAd();
    await adsInstance.verifyAd();
})