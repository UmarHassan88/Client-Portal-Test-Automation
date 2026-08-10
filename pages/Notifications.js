import {expect} from '@playwright/test';
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
        this.notificationTitle = page.locator('[id="_r_j2_"]');
    }

    async createNotification(){
        const listingInstance = new Listing(this.page);
        await listingInstance.navigatetoMarketing();
        await this.createNotificationbutton.click();
        await expect(this.createAssertion).toBeVisible();
        console.log("Validation of Mandatory Fields");
        await this.mandatoryFieldValidation(this.page, this.submitBtn, this.notifMandatory);
        await this.mandatoryFieldValidation(this.page, this.submitBtn, this.notifBody);
        console.log("Validation of Mandatory Fields completed");
        
    }
}