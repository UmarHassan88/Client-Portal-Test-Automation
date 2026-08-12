import { expect } from '@playwright/test';
import { Helpers } from "./ReusableFunctions/helpers";
import { Listing } from './Listing';

export class Ads extends Helpers {
    constructor(page) {
        super(page);
        this.page = page;
        this.createAds = page.getByRole('button', { name: 'Create Ad' });
        this.submitBtn = page.getByRole('button', { name: 'submit' });
        // Mui-error is on the input wrapper, not the label/helper text
        this.mandatoryTitle = page
            .locator('.MuiFormControl-root')
            .filter({ has: page.getByRole('textbox', { name: /Ad Title/i }) })
            .locator('.MuiInputBase-root');
        this.mandatoryPlatform = page.locator('.MuiFormControl-root')
        .filter({ has: page.getByRole('textbox', { name: /Platform/i }) })
        .locator('.MuiInputBase-root');
        this.adTitle = page.getByRole('textbox', { name: 'Enter ad title' });
        this.platform = page.getByRole('combobox', { name: 'Select platform' })
        this.language = page.getByRole('combobox', { name: 'Select language' })   
        this.direction = page.getByRole('combobox', { name: 'Select direction' });
        this.uploadAd = page.locator('label').filter({ hasText: 'Drag & drop or click to' });
        this.showAd = page.getByRole('switch', { name: 'Show Ad' });
        this.redirectLink = page.getByRole('textbox', { name: 'Enter redirect link' });
        this.description = page.getByRole('textbox', { name: 'Enter description' });
        this.searchAd = page.getByRole('textbox', { name: 'Search' })
        this.adAttachment = page.locator('input[type="file"]');

    }

    async createAd() {
        const Listinginstance = new Listing(this.page);
        await Listinginstance.navigatetoAds();
        await expect(this.createAds).toBeVisible();
        await this.createAds.click();
        await this.mandatoryFieldValidation(this.page, this.submitBtn, this.mandatoryTitle);
        await this.randomStringgenerator(this.page, this.adTitle);
        this.adInput = await this.adTitle.inputValue();
        console.log("Ad Title to Verify: ", this.adInput);
        await this.selectfromDropdown(this.page, this.platform, 'Website');
        await this.selectfromDropdown(this.page, this.language, 'En');
        await this.selectfromDropdown(this.page, this.direction, 'Horizontal');
        // await this.uploadAd.click();
        await this.uploadAttachment(this.page, this.adAttachment);
        await this.showAd.click();
        await this.randomStringgenerator(this.page, this.redirectLink);
        await this.randomStringgenerator(this.page, this.description);
        await this.submitBtn.click();
        await expect(this.page.getByText('created successfully')).toBeVisible();
        
        // await this.mandatoryFieldValidation(this.page, this.submitBtn, this.mandatoryPlatform); 
    }

    async verifyAd() {
        await this.searchAd.fill(this.adInput);
        await expect(this.page.getByText(this.adInput)).toBeVisible({ timeout: 10000 });
        console.log("Ad Verified: ", this.adInput);
    }
}
