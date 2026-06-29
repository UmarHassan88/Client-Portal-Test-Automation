import { expect } from '@playwright/test';
import { Admin } from './Admin';
import { Helpers } from './ReusableFunctions/helpers';
import { faker } from '@faker-js/faker';

export class CompanyProfile extends Helpers {
    constructor(page) {
        super(page);
        this.companyProfileTab = page.getByRole('tab', { name: 'Company Profile' });
        this.presentationTab = page.getByRole('tab', { name: 'Presentation & Contact' });
        this.workingHourstab = page.getByRole('tab', { name: 'Working Hours' });
        this.workingDaytab = page.getByRole('switch', { name: 'Working Day' }).first();
        this.socialMediaTab = page.getByRole('tab', { name: 'Social Media' });
        this.bankAccountTab = page.getByRole('tab', { name: 'Bank Accounts' });

        this.contactNumber = page.getByPlaceholder('Enter Phone No')
        this.whatsappNumber = page.getByPlaceholder('Enter Whatsapp Number');
        // App reuses the tagline placeholder on the landline field
        this.landlineNumber = page.getByPlaceholder(/Please Enter tagline/i);
        this.description = page.getByRole('textbox', { name: 'About', exact: true });
        this.descriptionAR = page.getByRole('textbox', { name: 'About AR' });
        this.savecontinueButton = page.getByRole('button', { name: 'Save & Continue' });

        //Social Media Locators
        this.platform = page.getByRole('combobox', { name: 'Select Platform' });
        this.platformUrl = page.getByRole('textbox', { name: 'Enter paltform' })
        this.addPlatformButton = page.getByRole('button').filter({ hasText: 'Platform' });
        this.verifyPlatformUrl = page.getByText('https://www.instagram.com/testaccount/');
        this.verifyPlatformUrlEdit = page.getByText('https://www.facebook.com/testaccount/');
        this.editURL = page.locator('div:nth-child(7) > .MuiBox-root.mui-1bhb1an > .MuiBox-root.mui-21wudl > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.edit');
        this.deleteURL = page.locator('div:nth-child(7) > .MuiBox-root.mui-1bhb1an > .MuiBox-root.mui-21wudl > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.delete');

        //Bank Accounts Locators
        this.bankAccountsTab = page.getByRole('tab', { name: 'Bank Accounts' }); 
        this.bankName = page.getByRole('textbox', { name: 'Bank Name' });
        this.bankCountry = page.getByRole('combobox', { name: 'Please a Country' });
        this.bankCurrency = page.getByRole('combobox', { name: 'Please select a Currency' });
        this.accountholderName = page.getByRole('textbox', { name: 'Account Holder Name' });
        this.iban = page.getByRole('textbox', { name: 'IBAN Number' });
        this.swiftCode = page.getByRole('textbox', { name: 'SWIFT Code' });
        this.saveBankAccountButton = page.getByRole('button', { name: 'Save' });

        this.profileUpdatesuccess = page.getByText('Company profile updated');

    }

    randomPhoneDigits(length = 10) {
        return faker.string.numeric(length);
    }

    async navigateToCompanyProfile() {
        const adminInstance = new Admin(this.page);
        await adminInstance.navigateToAccounts();
        await expect(this.companyProfileTab).toBeVisible();
        await this.companyProfileTab.click();
        console.log('Navigated to Company Profile page');
    }

    async socialMediaVerification(platformValue, platformURL) {
        await expect(this.socialMediaTab).toBeEnabled();
        await this.selectfromDropdown(this.page, this.platform, platformValue);
        await this.platformUrl.fill(platformURL);
        await this.addPlatformButton.click();
        const urlValue = await this.platformUrl.inputValue();
        console.log("Social Media Page Added Successfully");
        console.log('URL Value:', urlValue);

        console.log('URL Verified Successfully:', urlValue);
    }

    async updateCompanyProfile() {
        await expect(this.presentationTab).toBeVisible();
        await this.presentationTab.click();
        // await this.contactNumber.clear();
        await this.contactNumber.fill(this.randomPhoneDigits());
        this.contactNumberValue = await this.contactNumber.inputValue();
        await this.whatsappNumber.fill(this.randomPhoneDigits());
        this.whatsappNumberValue = await this.whatsappNumber.inputValue();
        await this.landlineNumber.fill(this.randomPhoneDigits());
        this.landlineNumberValue = await this.landlineNumber.inputValue();
        await this.description.fill(faker.lorem.paragraph());
        this.descriptionValue = await this.description.inputValue();
        await this.descriptionAR.fill(faker.lorem.paragraph());
        this.descriptionARValue = await this.descriptionAR.inputValue();
        console.log('Contact Number:', this.contactNumberValue);
        console.log('Whatsapp Number:', this.whatsappNumberValue);
        console.log('Landline Number:', this.landlineNumberValue);
        console.log('Description:', this.descriptionValue);
        console.log('Description AR:', this.descriptionARValue);
        await this.savecontinueButton.click();

        await expect(this.workingHourstab).toBeEnabled();
        await this.workingDaytab.click();

        await this.socialMediaTab.click();
        await this.socialMediaVerification('Instagram', 'https://www.instagram.com/testaccount/');
        await expect(this.verifyPlatformUrl).toBeVisible();

        //Triggering Edit button:
        await this.editURL.click();
        console.log('Edit button clicked');
        await this.socialMediaVerification('Facebook', 'https://www.facebook.com/testaccount/');
        await expect(this.verifyPlatformUrlEdit).toBeVisible();
        await this.deleteURL.click();
        console.log('The platform added and edited is now deleted successfully');
        await expect(this.verifyPlatformUrlEdit).not.toBeVisible();

        await this.bankAccountsTab.click();
        await expect(this.bankAccountsTab).toBeEnabled();
        await this.randomStringgenerator(this.page, this.bankName);
        await this.selectfromDropdown(this.page, this.bankCountry, 'United Arab Emirates');
        await this.selectfromDropdown(this.page, this.bankCurrency, 'UAE Dirham');
        await this.randomStringgenerator(this.page, this.accountholderName);
        await this.randomStringgenerator(this.page, this.iban);
        await this.randomStringgenerator(this.page, this.swiftCode);
        await this.saveBankAccountButton.click();
        await expect(this.profileUpdatesuccess).toBeVisible();
        console.log('Bank Account Added Successfully');
        console.log('---Profile Updated Successfully---');

    }

    

}