import { expect } from '@playwright/test';
import { Helpers } from "./ReusableFunctions/helpers";
import { Listing } from './Listing';
import path from 'path';
import { uploadAttachment } from './ReusableFunctions/helpers';
export class Services extends Helpers {
    constructor(page){
        super(page);
        this.page = page;

        this.createServiceButton = page.getByRole('button', { name: 'Create Service' });
        this.createServiceTitle = page.locator('form').getByText('Create Service');
        this.activityTypeDropdown = page.getByRole('combobox', { name: 'Select activity' })
        this.title = page.getByRole('textbox', { name: 'Add the title', exact: true });
        this.titleAR = page.getByRole('textbox', { name: 'Add the title ar' });
        this.summary = page.locator('textarea[name="summary"]');
        this.summaryAR = page.locator('textarea[name="summary_ar"]');
        this.description = page.getByRole('paragraph').filter({ hasText: /^$/ }).first();
        this.descriptionAR = page.getByRole('paragraph').filter({ hasText: /^$/ })
        // Must be <input type="file"> — setInputFiles does not work on the visible button/label
        this.coverImage = page.locator('input[type="file"]').nth(0);
        this.horcoverImage = page.locator('input[type="file"]').nth(1);
        this.submitBtn = page.getByRole('button', { name: 'submit' });
    }

    async createService(){
        const listingInstance = new Listing(this.page);
        await listingInstance.navigatetoServices();
        await expect(this.createServiceButton).toBeVisible();
        await this.createServiceButton.click();
        await expect(this.createServiceTitle).toBeVisible();
        await this.selectfromDropdown(this.page, this.activityTypeDropdown, 'Brokerage Service');
        await this.randomStringgenerator(this.page, this.title);
        await this.randomStringgenerator(this.page, this.titleAR);
        await this.randomStringgenerator(this.page, this.summary);
        this.summaryInput = await this.summary.inputValue();
        await this.randomStringgenerator(this.page, this.summaryAR);
        await this.randomStringgenerator(this.page, this.description);
        await this.randomStringgenerator(this.page, this.descriptionAR);
        await this.uploadAttachment(this.page, this.coverImage);
        await this.uploadAttachment(this.page, this.horcoverImage);

        await this.submitBtn.click();

    }

    async verifyService(){
        await expect(this.page.getByText(this.summaryInput)).toBeVisible();
        console.log("The added service is verified successfully having the summary as ", this.summaryInput);    
    }
}