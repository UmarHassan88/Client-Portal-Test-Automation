import { expect } from '@playwright/test';
import { Listing } from './Listing';
import { Helpers } from './ReusableFunctions/helpers';

export class Notifications extends Helpers {
    constructor(page) {
        super(page);
        this.page = page;
        this.createNotificationbutton = page.getByRole('button', { name: 'Create Notification' });
        this.createAssertion = page.getByRole('dialog').getByText('Create Notification');
        this.submitBtn = page.getByRole('button', { name: 'submit' });
        this.notifMandatory = page.getByText('Notification Title EN *');
        this.notifBody = page.getByText('Notification Body EN *');
        this.notificationTitle = page.getByTestId('title').getByRole('textbox', { name: 'Enter notification title' });
        this.notificationTitlear = page.getByTestId('title_ar').getByRole('textbox', { name: 'Enter notification title' });
        this.notificationBody = page.getByTestId('notification_body').getByRole('textbox', { name: 'Enter notification body' });
        this.notificationBodyar = page.getByRole('textbox', { name: 'Enter notification body AR' });
        this.category = page.getByRole('combobox', { name: 'Select category' });
        this.descrImage = page.locator('#file, input[type="file"]')
        this.redirectLink = page.getByRole('textbox', { name: 'Enter redirect link' })
        this.usersEnabled = page.getByTestId('audience_users');
        this.users = page.getByRole('combobox', { name: 'Select users' });
        this.userType = page.getByRole('combobox', { name: 'Select user type' });

        //Verification Locators
        this.search = page.getByRole('textbox', { name: 'Search' });

    }

    async createNotification() {
        const listingInstance = new Listing(this.page);
        await listingInstance.navigatetoMarketing();
        await this.createNotificationbutton.click();
        await expect(this.createAssertion).toBeVisible();
        console.log("Validation of Mandatory Fields");
        await this.mandatoryFieldValidation(this.page, this.submitBtn, this.notifMandatory);
        await this.mandatoryFieldValidation(this.page, this.submitBtn, this.notifBody);
        console.log("Validation of Mandatory Fields completed");
        await this.notificationTitle.fill("Check out our new Listings")
        this.notificationValue = await this.notificationTitle.inputValue();
        await this.randomStringgenerator(this.page, this.notificationTitlear);
        await this.notificationBody.fill("Check out our new Listings")
        await this.randomStringgenerator(this.page, this.notificationBodyar);
        await this.selectfromDropdown(this.page, this.category, 'Marketing');
        await this.uploadAttachment(this.page, this.descrImage);
        await this.redirectLink.fill('https://www.google.com');
        await expect(this.usersEnabled).toBeEnabled();
        console.log("Users Tab is enabled")
        await this.selectfromDropdown (this.page, this.users, 'Custom');
        await expect(this.userType).toBeEnabled();
        await this.selectfromDropdown(this.page, this.userType, 'Visitor');
        await this.submitBtn.click(); 
    }

    async verifyNotification(){
        await this.search.fill(this.notificationValue);
        await expect(this.page.getByText(this.notificationValue)).toBeVisible();
        console.log("Notification created and verifiedsuccessfully")
    }
}