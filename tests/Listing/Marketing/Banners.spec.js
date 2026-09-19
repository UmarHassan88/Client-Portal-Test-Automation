import { test } from "@playwright/test";
import { Banners } from "../../../pages/Banners";


test('This test creates a new banner', async ({ page }) => {
    const instance = new Banners(page);
    await instance.mandatoryFields();
    await instance.createBanner();
    await instance.verifyCreatedBanner();
    await instance.editBanner();
    await instance.verifyCreatedBanner();
    await instance.deleteBanner();
})