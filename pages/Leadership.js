import { expect } from "@playwright/test";
import { Admin } from "./Admin";
import { faker } from "@faker-js/faker";
import { Helpers } from './ReusableFunctions/helpers';

export class Leadership extends Helpers{
    constructor(page){
        super(page);
        this.leadershipPage = page.getByRole('tab', { name: 'Leadership' })
        this.salutation = page.getByRole('combobox').first();
        this.salutationar = page.getByText('Mr.').nth(1)
        this.name = page.locator('input[name="leadership_f_name"]');
        this.namear = page.locator('input[name="leadership_f_name_ar"]');
        this.designation = page.locator('input[name="leadership_f_designation"]');
        this.designationar = page.locator('input[name="leadership_f_designation_ar"]');
        this.about = page.getByRole('textbox', { name: 'About', exact: true });
        this.aboutar = page.getByRole('textbox', { name: 'About AR' });
        // Must be an <input type="file"> — setInputFiles does not work on the visible <label>
        this.profilePic = page
            .locator('label')
            .filter({ hasText: /Drag & drop or click to/i })
            .locator('input[type="file"]');
        this.addSaveButton = page.getByRole('button', { name: 'Add & Save' });
    }

    async navigateToLeadershipPage(){
        const adminInstance = new Admin(this.page);
        await adminInstance.navigateToAccounts();
        await expect(this.leadershipPage).toBeVisible();
        await this.leadershipPage.click();

    }
    async createLeadership(){
        await expect(this.name).toBeVisible();
        await this.selectfromDropdown(this.page, this.salutation, 'Mr.');
        await expect(this.salutationar).toBeVisible();
        await this.name.fill(faker.person.firstName());
        this.nameValue = await this.name.inputValue();
        await this.namear.fill(faker.person.firstName());
        await this.designation.fill(faker.person.jobTitle());
        await this.designationar.fill(faker.person.jobTitle());
        await this.about.fill(faker.lorem.paragraph());
        await this.aboutar.fill(faker.lorem.paragraph());
        await this.uploadAttachment(this.page, this.profilePic);
        await this.addSaveButton.click();
        console.log('Leadership Added Successfully:', this.nameValue);
    }
    
    async verifyLeadership(){
        await expect(this.page.getByText(this.nameValue)).toBeVisible();
        console.log('Leadership Verified Successfully:', this.nameValue);
    }

    
}