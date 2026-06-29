import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { Admin } from './Admin';
import { Helpers } from './ReusableFunctions/helpers';
export class CompanyUsers extends Helpers {
    constructor(page) {
        super(page);
        this.companyUserstab = page.getByRole('tab', { name: 'Company Users' });
        this.createCompanyUserButton = page.getByRole('button', { name: 'Create User' }).getByRole('link');
        this.firstName = page.getByRole('textbox', { name: 'Enter First Name' });
        this.lastName = page.getByRole('textbox', { name: 'Enter Last Name' });
        this.username = page.getByRole('textbox', { name: 'Enter Username' })
        this.email = page.getByRole('textbox', { name: 'User email' })
        this.extension = page.getByPlaceholder('Enter extension');
        this.landline = page.getByPlaceholder('Enter landline');
        this.mobile = page.getByPlaceholder('Enter Contact Phone no');
        this.whatsapp = page.getByPlaceholder('Enter Whats App');
        this.changeCover = page.locator('input[name="cover"]');
        this.changePhoto = page.locator('input[name="portrait"]');
        this.continueButton = page.getByRole('button', { name: 'Continue' })

        //User Information Page Locators
        this.userInformationPageTitle = page.getByRole('tab', { name: 'User Information' });
        this.gender = page.getByRole('combobox', { name: 'Select gender' });
        this.nationality = page.getByRole('combobox', { name: 'Select nationality' });
        this.experienceSince = page.getByText('MM/DD/YYYY');
        this.specialties = page.getByRole('combobox', { name: 'Select specialties' });
        this.serviceArea = page.getByRole('combobox', { name: 'Select Service Areas' });
        this.languages = page.getByRole('combobox', { name: 'Select Languages' });
        this.abouten = page.getByRole('textbox', { name: 'Description..' })
        this.aboutar = page.getByRole('textbox', { name: 'About AR' })

        //Manage Document Page Locators
        this.manageDocumentPageTitle = page.getByRole('tab', { name: 'Manage Document' });
        this.role = page.getByRole('combobox', { name: 'Select Role' });

        // Social Media Page Locators
        this.socialMediaPageTitle = page.getByRole('tab', { name: 'Social Media' });
        this.platform = page.getByRole('combobox', { name: 'Select Platform' });
        this.platformUrl = page.getByRole('textbox', { name: 'Enter paltform' })
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.lastPageButton = page.getByRole('button', { name: 'Go to last page' })
    }

    async navigateToCompanyUsers() {
        const accountInstance = new Admin(this.page);
        await accountInstance.navigateToAccounts();
        await expect(this.companyUserstab).toBeVisible();
        await this.companyUserstab.click();
    }

    async createCompanyUser() {
        await expect(this.createCompanyUserButton).toBeVisible();
        await this.createCompanyUserButton.click();
        await this.firstName.fill(faker.person.firstName());
        await this.lastName.fill(faker.person.lastName());
        //Extracting Values for Verification
        const firstNameinput = await this.firstName.inputValue();
        const lastNameinput = await this.lastName.inputValue();
        const first = firstNameinput.trim();
        const last = lastNameinput.trim();
        this.mergeNames = `${first} ${last}`;
        // const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // const mergeNamesPattern = new RegExp(`${esc(first)}\\s*${esc(last)}`);
        console.log('Value to verify: ' + this.mergeNames);
        await this.username.fill(faker.string.alpha(10).toLowerCase());
        await this.email.fill(faker.internet.email());
        await this.randomIntgenerator(this.page, this.extension);
        await this.randomIntgenerator(this.page, this.landline);
        await this.randomIntgenerator(this.page, this.mobile);
        await this.randomIntgenerator(this.page, this.whatsapp);
        await this.uploadAttachment(this.page, this.changeCover);
        await this.uploadAttachment(this.page, this.changePhoto);
        await expect(this.continueButton).toBeVisible();
        await this.continueButton.click();
        console.log("User Details Page Added Successfully");

        //User Information Page
        await expect(this.userInformationPageTitle).toBeEnabled();
        await this.selectfromDropdown(this.page, this.gender, 'Male');
        await this.selectfromDropdown(this.page, this.nationality, 'United Arab');
        await this.experienceSince.pressSequentially('22/02/2026');
        await this.selectfromDropdown(this.page, this.specialties, 'Test');
        await this.selectfromDropdown(this.page, this.serviceArea, 'Dubai');
        await this.selectfromDropdown(this.page, this.languages, 'English');
        await this.abouten.fill('I am a doctor with 10 years of experience');
        await this.aboutar.fill('I am a doctor with 10 years of experience');
        await this.continueButton.click();
        console.log("User Information Page Added Successfully");


        //Manage Document Page
        await expect(this.manageDocumentPageTitle).toBeEnabled();
        await this.selectfromDropdown(this.page, this.role, 'Agent');
        await this.continueButton.click();
        console.log("Manage Document Page Added Successfully");

        //Social Media Page
        await expect(this.socialMediaPageTitle).toBeEnabled();
        await this.selectfromDropdown(this.page, this.platform, 'Facebook');
        await this.platformUrl.fill('https://www.facebook.com/');
        await this.submitButton.click();
        console.log("Social Media Page Added Successfully");
        console.log("User Added Successfully");

    }

    async verifyUser(){
        // Verifying the Added User
        await expect(this.lastPageButton).toBeVisible();
        await this.lastPageButton.click();
        await expect(this.page.getByText(this.mergeNames)).toBeVisible({ timeout: 20_000 });
        console.log('User Verified Successfully:', this.mergeNames);
        // return this.mergeNames;
    }

   
   
}
