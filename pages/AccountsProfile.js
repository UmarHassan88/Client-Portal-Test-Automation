import {expect} from '@playwright/test'
import { Admin } from './Admin';
import { Helpers } from './ReusableFunctions/helpers';

let email = 'admin@aqaryinvestment.com';
let landlineNum = '1234567890';
let currentPassword = 'HereWeGo@2026';
let newPassword = currentPassword;
let confirmPassword = newPassword;

export class AccountsProfile extends Helpers{
    
    constructor(page) {
        super(page);
       
        this.edituserInfo = page.getByRole('button', { name: 'Edit' }).first();
        this.landline = page.getByPlaceholder('Enter Landline');
        this.saveButton = page.getByRole('button', { name: 'save' });
        this.emailLoc = page.getByRole('textbox', { name: 'Email address' })
        this.landlineVerify = page.getByText('+971 ' + landlineNum);
        this.emailVerify = page.getByRole('button', { name: 'aidadmin ' + `${email}` })

        //User Profile Locators
        this.userProfile = page.getByRole('button', { name: 'Edit' }).nth(1);
        this.changePhoto = page.locator('input[name="portrait"]');
        this.changeCover = page.locator('input[name="cover"]')
        this.saveButton = page.getByRole('button', { name: 'save' });
        this.verifyprofileImage = page.getByRole('img', { name: 'use cover image' }).nth(1);
        this.verifycoverImage = page.getByRole('img', { name: 'use cover image' }).first();

        //Password Locators
        this.editPasswordIcon = page.getByRole('button', { name: 'Edit' }).nth(2);
        this.savePasswordButton = page.getByRole('button', { name: 'save' });
        this.warningValidation = page.getByRole('alert').filter({ hasText: 'Password must contain at' });
        this.currentPassword = page.getByRole('textbox', { name: 'Current Password' });
        this.newPassword = page.getByRole('textbox', { name: 'New Password' });
        this.confirmPassword = page.getByRole('textbox', { name: 'Confirm Password' });
        this.samepasswordValidation = page.getByRole('alert').filter({ hasText: 'new password must be' });

    }
    async navigateToAccounts(){
        const adminInstance = new Admin(this.page);
        await adminInstance.navigateToAccounts();
        // await expect(this.page).toHaveURL('https://dashboard.oneaqary.com/en/dashboard/account/me');
    }
    async profileeditUserInfo(){
        await expect(this.edituserInfo).toBeVisible();
        await this.edituserInfo.click();
        await this.landline.fill(landlineNum);
        await this.emailLoc.fill(email);
        await this.saveButton.click();
        // await this.page.reload();
        await expect(this.landlineVerify).toBeVisible();
        //Validation for Email in the Icon.
        await expect(this.emailVerify).toBeVisible();
    }

    async edituserProfile(){
        await expect(this.userProfile).toBeVisible();
        await this.userProfile.click();
        await this.changePhoto.setInputFiles('C:\\Users\\umar\\Downloads\\Testpic.png');
        await this.uploadAttachment(this.page, this.changePhoto);
        await this.uploadAttachment(this.page, this.changeCover);
        await this.saveButton.click();
        await expect(this.verifyprofileImage).toBeVisible();
        await expect(this.verifycoverImage).toBeVisible();
    }

    async editPassword(){
        await expect(this.editPasswordIcon).toBeVisible();
        await this.editPasswordIcon.click();
        await this.savePasswordButton.click();
        await expect(this.warningValidation).toBeVisible();
        await this.currentPassword.fill(currentPassword);
        await this.newPassword.fill(newPassword);
        await this.confirmPassword.fill(confirmPassword);
        await this.savePasswordButton.click();
        await expect(this.samepasswordValidation).toBeVisible();

    }
}