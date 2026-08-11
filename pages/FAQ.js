import { expect } from "@playwright/test";
import { Helpers } from "./ReusableFunctions/helpers";
import { Admin } from "./Admin";

export class FAQ extends Helpers {

    constructor(page) {

        super(page);
        this.page = page;
        this.createFAQButton = page.getByRole('button', { name: 'Create FAQ' });
        this.submitBtn = page.getByRole('button', { name: 'submit' });
        this.faqPopup = page.getByRole('dialog').getByText('Create FAQ');
        this.questionRequired = page.getByText('Question EN *')
        this.answerRequired = page.getByText('Answer EN *');
        this.modulesRequired = page.getByText('Modules *');
        this.countryRequired = page.getByText('Country *');
        this.questionEN = page.locator('textarea[name="question"]');
        this.answerEN = page.getByRole('textbox', { name: 'Add the answer' });
        this.modules = page.getByRole('combobox', { name: 'Select Modules' })
        this.country = page.getByRole('combobox', { name: 'Select Country' });
        this.tags = page.getByRole('combobox', { name: 'Type and click to add tag' });


    }
    async createFAQ() {
        const adminInstance = new Admin(this.page);
        await adminInstance.navigateToFAQ();
        await expect(this.createFAQButton).toBeVisible();
        await this.createFAQButton.click();
        await expect(this.faqPopup).toBeVisible();

        //Mandatory Field Validation
        await this.mandatoryFieldValidation(this.page, this.submitBtn, this.questionRequired);
        await this.mandatoryFieldValidation(this.page, this.submitBtn, this.answerRequired);
        await this.mandatoryFieldValidation(this.page, this.submitBtn, this.modulesRequired);
        await this.mandatoryFieldValidation(this.page, this.submitBtn, this.countryRequired);
        console.log("Now filling the actual data")
        await this.randomStringgenerator(this.page, this.questionEN);
        await this.randomStringgenerator(this.page, this.answerEN);
        await this.selectfromDropdown(this.page, this.modules, 'Map');
        await this.selectfromDropdown(this.page, this.country, 'United Arab Emirates');
        await this.randomStringgenerator(this.page, this.tags);
        await this.submitBtn.click();





       

    }

}