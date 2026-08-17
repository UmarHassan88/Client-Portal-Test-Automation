import { expect } from "@playwright/test";
import { Helpers } from "./ReusableFunctions/helpers";
import { Listing } from "./Listing";

export class Banners extends Helpers {

    constructor(page) {
        super(page);
        this.page = page;
        this.bannersTab = page.getByRole('tab', { name: 'Banners' });
        this.createBannerBtn = page.getByRole('button', { name: 'Create Banner' });
        this.assertBannertext = page.getByRole('dialog').getByText('Create Banner');
        this.submitBtn = page.getByRole('button', { name: 'submit' })

        //Mandatory Fields Locators
        this.bannertitleMandatory = page.getByText('Banner Title *');
        this.bannerRatioMandatory = page.getByText('Banner Ratio *');
        this.platformMandatory = page.getByText('Platform *');
        this.languageMandatory = page.getByText('Language *');
        this.designAttachmentMandatory = page.getByText('Upload Design *');



        this.bannerTitle = page.getByRole('textbox', { name: 'Enter banner title' });
        this.bannerRatio = page.getByRole('combobox', { name: 'Select banner ratio' });
        this.platform = page.getByRole('combobox', { name: 'Select platform' });
        this.language = page.getByRole('combobox', { name: 'Select language' });
        this.designAttachment = page.locator('#file, input[type="file"]').first();
        this.redirectLink = page.getByRole('textbox', { name: 'Enter redirect link' });
        this.description = page.getByRole('textbox', { name: 'Enter description' });
        this.search = page.getByRole('textbox', { name: 'Search' });

        //Edit Banner Locators
        this.editBannerBtn = page.getByLabel('Edit')
        this.deleteBannerBtn = page.getByLabel('Delete')
        this.deleteConfirmationBtn = page.getByRole('button', { name: 'yes' })

    }

    async mandatoryFields() {
        const listInstance = new Listing(this.page);
        await listInstance.navigatetoMarketing();
        await expect(this.bannersTab).toBeVisible();
        await this.bannersTab.click();
        await expect(this.createBannerBtn).toBeVisible();
        await this.createBannerBtn.click();
        await expect(this.assertBannertext).toBeVisible();
        await this.mandatoryFieldValidation(this.page, this.submitBtn, this.bannertitleMandatory);
        await this.mandatoryFieldValidation(this.page, this.submitBtn, this.bannerRatioMandatory);
        await this.mandatoryFieldValidation(this.page, this.submitBtn, this.platformMandatory);
        await this.mandatoryFieldValidation(this.page, this.submitBtn, this.languageMandatory);
        await this.mandatoryFieldValidation(this.page, this.submitBtn, this.designAttachmentMandatory);
        console.log('Mandatory Fields Verified successfully');
    }

    async createBanner() {

        await this.randomStringgenerator(this.page, this.bannerTitle);
        this.bannertitleInput = await this.bannerTitle.inputValue();
        await this.selectfromDropdown(this.page, this.bannerRatio, '1:1');
        await this.selectfromDropdown(this.page, this.platform, 'Website');
        await this.selectfromDropdown(this.page, this.language, 'En');
        await this.uploadAttachment(this.page, this.designAttachment);
        await this.randomStringgenerator(this.page, this.redirectLink);
        await this.randomStringgenerator(this.page, this.description);
        await this.submitBtn.click();
        console.log('Banner created successfully');

    }

    async verifyCreatedBanner() {
        await this.search.fill(this.bannertitleInput);
        await expect(this.page.getByRole('cell', { name: this.bannertitleInput }).getByRole('paragraph')).toBeVisible();
        console.log('Banner Verified successfully');
    }

    async editBanner(){
        await this.editBannerBtn.click();
        await this.randomStringgenerator(this.page, this.bannerTitle);
        this.bannertitleInput = await this.bannerTitle.inputValue();
        await this.selectfromDropdown(this.page, this.bannerRatio, '16:9');
        await this.selectfromDropdown(this.page, this.platform, 'Mobile');
        await this.selectfromDropdown(this.page, this.language, 'Ar');
        await this.uploadAttachment(this.page, this.designAttachment);
        await this.randomStringgenerator(this.page, this.redirectLink);
        await this.randomStringgenerator(this.page, this.description);
        await this.submitBtn.click();
        console.log('Banner edited successfully');
    }

    async deleteBanner(){
        await this.deleteBannerBtn.click();
        await expect(this.deleteConfirmationBtn).toBeVisible();
        await this.deleteConfirmationBtn.click();
        console.log('Banner deleted successfully');
    }
}